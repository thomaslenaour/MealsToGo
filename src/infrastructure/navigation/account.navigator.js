import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '../../features/account/screens/login'
import { AccountScreen } from '../../features/account/screens/account'
import { RegisterScreen } from '../../features/account/screens/register'

const AccountStack = createStackNavigator()

export const AccountNavigator = () => (
  <AccountStack.Navigator headerMode="none">
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
  </AccountStack.Navigator>
)
