import * as S from './styles'

function Loading() {
  return (
    <S.Wrapper>
      <S.LoadingBalls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </S.LoadingBalls>
    </S.Wrapper>
  )
}

export default Loading
