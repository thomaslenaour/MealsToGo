import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'

import { Search } from '../components/search'
import { SafeArea } from '../../../components/utility/safe-area'
import { RestaurantInfoCard } from '../components/restaurant-info-card'
import { Spacer } from '../../../components/spacer/spacer'
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context'

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const LoadingBox = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingBox>
          <Loading size={50} animating={true} colors={Colors.blue300} />
        </LoadingBox>
      )}
      <Search />
      <RestaurantsList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(restaurant) => restaurant.name}
      />
    </SafeArea>
  )
}
