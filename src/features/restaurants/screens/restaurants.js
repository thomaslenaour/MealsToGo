import React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { SafeArea } from '../../../components/utility/safe-area'
import { RestaurantInfoCard } from '../components/restaurant-info-card'
import { Spacer } from '../../../components/spacer/spacer'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantsList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(restaurant) => restaurant.name}
    />
  </SafeArea>
)
