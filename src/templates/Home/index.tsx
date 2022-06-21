import * as S from './styles'

import Image from 'next/image'
import Heading from 'components/Heading'

function HomeTemplate() {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.Container>
          <S.HeroContent>
            <S.HeroText>
              <Heading size="xlarge" color="primary" level={1}>
                Encontre o lugar perfeito para alugar
              </Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretiu.
              </p>
            </S.HeroText>
            <S.SearchContainer>Hi</S.SearchContainer>
          </S.HeroContent>
          <div className="image">
            <Image src="/image.png" objectFit="cover" layout="fill" alt="" />
          </div>
        </S.Container>
        <div className="square"></div>
      </S.Hero>
    </S.Wrapper>
  )
}

export default HomeTemplate
