import { ReactNode } from 'react'
import theme from 'styles/theme'

import * as S from './styles'

export type HeadingProps = {
  size?: keyof typeof theme.font.sizes
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: 'primary' | 'black' | 'white'
  weight?: 'medium' | 'bold'
  children: ReactNode
}

function Heading({
  size = 'large',
  level = 6,
  color = 'black',
  weight = 'bold',
  children
}: HeadingProps) {
  return (
    <S.Wrapper size={size} level={level} color={color} weight={weight}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
