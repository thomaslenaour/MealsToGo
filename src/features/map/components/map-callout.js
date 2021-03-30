import React from 'react'
import styled from 'styled-components/native'

import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info'

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
)
