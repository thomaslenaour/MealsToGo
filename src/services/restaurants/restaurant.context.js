import React, { useState, createContext, useEffect, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurant.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const retrieveRestaurants = () => {
    setIsLoading(true)
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setRestaurants(result)
          setIsLoading(false)
        })
        .catch((err) => {
          setError(err)
          setIsLoading(false)
        })
    }, 2000)
  }

  useEffect(() => {
    retrieveRestaurants()
  }, [])

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  )
}