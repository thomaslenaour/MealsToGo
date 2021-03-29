import React from 'react'
import { Text } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { theme } from './src/infrastructure/theme'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context'
import { LocationContextProvider } from './src/services/location/location.context'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { SafeArea } from './src/components/utility/safe-area'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: 'ios-restaurant',
  Map: 'ios-map',
  Settings: 'ios-settings',
}

const SettingsView = () => (
  <SafeArea>
    <Text>Settings View</Text>
  </SafeArea>
)

const MapsView = () => (
  <SafeArea>
    <Text>Settings View</Text>
  </SafeArea>
)

const tabBarIcon = (iconName) => ({ focused, color, size }) => (
  <Ionicons
    name={focused ? iconName : `${iconName}-outline`}
    size={size}
    color={color}
  />
)

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: tabBarIcon(iconName),
  }
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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray',
                }}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapsView} />
                <Tab.Screen name="Settings" component={SettingsView} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  )
}
