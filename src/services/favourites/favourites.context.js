import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const saveFavourite = async (allFavourites) => {
    try {
      const jsonValue = JSON.stringify(allFavourites)
      await AsyncStorage.setItem('@favourites', jsonValue)
    } catch (e) {
      console.log('error storing', e)
    }
  }

  const loadFavourites = async () => {
    try {
      const allFavourites = await AsyncStorage.getItem('@favourites')
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
    loadFavourites()
  }, [])

  useEffect(() => {
    saveFavourite(favourites)
  }, [favourites])

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}
