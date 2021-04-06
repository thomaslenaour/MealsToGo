import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import * as firebase from 'firebase'

import { Navigation } from './src/infrastructure/navigation/index'
import { theme } from './src/infrastructure/theme'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

const firebaseConfig = {
  apiKey: 'AIzaSyDJEkPgJwkN8JfnzjmOWMp0Jp5JTkad7o4',
  authDomain: 'meals-to-go-db3fb.firebaseapp.com',
  projectId: 'meals-to-go-db3fb',
  storageBucket: 'meals-to-go-db3fb.appspot.com',
  messagingSenderId: '852933962985',
  appId: '1:852933962985:web:9eb1511e9d18bf9437d478',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  )
}
