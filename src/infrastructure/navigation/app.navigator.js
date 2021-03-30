import React from 'react'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { RestaurantsNavigator } from './restaurants.navigator'
import { SafeArea } from '../../components/utility/safe-area'

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

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapsView} />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  </NavigationContainer>
)
