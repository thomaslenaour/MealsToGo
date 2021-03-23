import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

import { Spacer } from '../../../components/spacer/spacer'

import star from '../../../../assets/star'
import open from '../../../../assets/open'

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`
const Rating = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`
const StarSection = styled.View`
  flex-direction: row;
`
const SectionOpening = styled.View`
  flex-direction: row;
  align-items: center;
`

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
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <View>
          <Title>{name}</Title>
          <Rating>
            <StarSection>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </StarSection>
            <SectionOpening>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: 'red' }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionOpening>
          </Rating>
          <Address>{address}</Address>
        </View>
      </Info>
    </RestaurantCard>
  )
}
