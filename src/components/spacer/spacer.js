import React from 'react'
import styled, { useTheme } from 'styled-components/native'

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
}

const positionVariants = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
}

const getVariant = (position, size, theme) => {
  const property = positionVariants[position]
  const sizeIndex = sizeVariants[size]
  const value = theme.space[sizeIndex]

  return `${property}: ${value}`
}

const SpacerView = styled.View`
  ${({ variant }) => variant};
`

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme()
  const variant = getVariant(position, size, theme)

  return <SpacerView variant={variant}>{children}</SpacerView>
}

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
}
