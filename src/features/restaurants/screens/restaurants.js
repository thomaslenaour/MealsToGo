import React from 'react'
import styled from 'styled-components/native'
import { StatusBar, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'

import { RestaurantInfoCard } from '../components/restaurant-info-card'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeigh && `margin-top: ${StatusBar.currentHeight}px;`}
`

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantsListContainer>
      <RestaurantInfoCard />
    </RestaurantsListContainer>
  </SafeArea>
)