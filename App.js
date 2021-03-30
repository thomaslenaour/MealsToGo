import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import { Navigation } from './src/infrastructure/navigation/index'
import { theme } from './src/infrastructure/theme'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context'
import { LocationContextProvider } from './src/services/location/location.context'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular })
  const [latoLoaded] = useLato({ Lato_400Regular })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  )
}
