import styled, { css } from 'styled-components'
import theme from 'styles/theme'

type WrapperProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: keyof typeof theme.font.sizes
  color: 'primary' | 'black' | 'white'
  weight: 'medium' | 'bold'
}

export const Wrapper = styled('h1').attrs<WrapperProps>(({ level }) => ({
  as: `h${level}`
}))<WrapperProps>`
  ${({ theme, size, color, weight }) => css`
    font-size: min(${theme.font.sizes[size]}, 10vw);
    color: ${theme.colors[color].main};
    font-weight: ${theme.font.weight[weight]};
  `}
`
