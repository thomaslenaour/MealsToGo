import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Text } from '../../../components/typography/text'
import { SafeArea } from '../../../components/utility/safe-area'
import { FavouritesContext } from '../../../services/favourites/favourites.context'
import { RestaurantsList } from '../../restaurants/components/restaurant-list.styles'
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card'
import { Spacer } from '../../../components/spacer/spacer'

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext)

  return favourites.length ? (
    <SafeArea>
      <RestaurantsList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(restaurant) => restaurant.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text variant="label" center>
        No favourites yet
      </Text>
    </NoFavouritesArea>
  )
}
