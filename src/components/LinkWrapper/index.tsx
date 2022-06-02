import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import * as S from './styles'

export type LinkWrapperProps = {
  text: string
  href: string
  size: 'normal' | 'large'
}

function LinkWrapper({ text, href, size }: LinkWrapperProps) {
  return (
    <Link href={href} passHref>
      <S.Wrapper size={size}>
        <span>{text}</span>
        <FiArrowRight color="#18191F" className="icon" />
      </S.Wrapper>
    </Link>
  )
}

export default LinkWrapper
