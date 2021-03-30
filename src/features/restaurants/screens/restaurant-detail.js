import React from 'react'
import { SafeArea } from '../../../components/utility/safe-area'
import { RestaurantInfoCard } from '../components/restaurant-info-card'

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  )
}
