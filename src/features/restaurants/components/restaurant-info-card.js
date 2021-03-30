import React from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { Text } from '../../../components/typography/text'
import { Spacer } from '../../../components/spacer/spacer'
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  RatingSection,
  SectionOpening,
  Icon,
  Address,
} from './restaurant-info-card.styles'
import { Favourite } from '../../../components/favourites/favourite'

import star from '../../../../assets/star'
import open from '../../../../assets/open'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.theluxurysignature.com/wp-content/uploads/2016/10/Bali-Restaurant-Merah-Putih-Leggett-1.jpg',
    ],
    address = '100 Some Random Street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <View>
          <Text variant="label">{name}</Text>
          <Section>
            <RatingSection>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`start-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </RatingSection>
            <SectionOpening>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionOpening>
          </Section>
          <Address>{address}</Address>
        </View>
      </Info>
    </RestaurantCard>
  )
}
