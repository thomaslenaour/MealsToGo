import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthenticationContext } from '../../services/authentication/authentication.context'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext)
  const [favourites, setFavourites] = useState([])

  const saveFavourite = async (allFavourites, uid) => {
    try {
      const jsonValue = JSON.stringify(allFavourites)
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
    } catch (e) {
      console.log('error storing', e)
    }
  }

  const loadFavourites = async (uid) => {
    try {
      const allFavourites = await AsyncStorage.getItem(`@favourites-${uid}`)
      if (allFavourites !== null) {
        setFavourites(JSON.parse(allFavourites))
      }
    } catch (e) {
      console.log('error loading', e)
    }
  }

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (fav) => fav.placeId !== restaurant.placeId
    )
    setFavourites(newFavourites)
  }

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      saveFavourite(favourites, user.uid)
    }
  }, [favourites, user])

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
