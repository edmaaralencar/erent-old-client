import Link from 'next/link'
import * as S from './styles'

function HomeTemplate() {
  return (
    <S.Wrapper>
      <h1>Home</h1>
      <Link href="/properties?region=Nordeste">Ver propriedades</Link>
      <S.Slider>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </S.Slider>
      <S.Dots className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </S.Dots>
    </S.Wrapper>
  )
}

export default HomeTemplate
