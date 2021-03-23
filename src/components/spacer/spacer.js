import styled from 'styled-components/native'

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

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
}
