import React, { useState, createContext } from 'react'
import { useEffect } from 'react/cjs/react.development'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [keyword, setKeyword] = useState('San Francisco')

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
  }

  useEffect(() => {
    if (!keyword.length) return
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  )
}
