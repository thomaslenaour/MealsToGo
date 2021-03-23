import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { theme } from './src/infrastructure/theme'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants'

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
      <StatusBar barStyle="dark-content" />

      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  )
}
