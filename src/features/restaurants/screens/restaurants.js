import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'

import { Search } from '../components/search'
import { SafeArea } from '../../../components/utility/safe-area'
import { RestaurantInfoCard } from '../components/restaurant-info-card'
import { Spacer } from '../../../components/spacer/spacer'
import { FavouritesBar } from '../../../components/favourites/favourites-bar'
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context'
import { FavouritesContext } from '../../../services/favourites/favourites.context'
import { RestaurantsList } from '../components/restaurant-list.styles'
import { FadeInView } from '../../../components/animations/fade.animation'

const LoadingBox = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)

  const [isToggled, setIsToggled] = useState(false)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingBox>
          <Loading size={50} animating={true} colors={Colors.blue300} />
        </LoadingBox>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantsList
        data={restaurants}
        renderItem={({ item }) => (
          <FadeInView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </FadeInView>
        )}
        keyExtractor={(restaurant) => restaurant.name}
      />
    </SafeArea>
  )
}
