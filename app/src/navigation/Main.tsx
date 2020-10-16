import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from '../screens/OrphanagesMap/OrphanagesMap'
import OrphanageDetails from '../screens/OrphanageDetails'

const { Screen, Navigator } = createStackNavigator()

export default function Main() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
          options={{ headerShown: false }}
        />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
