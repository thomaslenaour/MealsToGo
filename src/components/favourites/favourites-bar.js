import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Text } from '../typography/text'
import { Spacer } from '../spacer/spacer'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info'

const FavouritesWrapper = styled.View`
  padding: 10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(' ').join('')
          return (
            <TouchableOpacity
              key={key}
              onPress={() => onNavigate('RestaurantDetail', { restaurant })}
            >
              <Spacer position="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </FavouritesWrapper>
  )
}
