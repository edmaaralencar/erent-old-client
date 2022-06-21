import Button from 'components/Button'
import Input from 'components/Input'
import * as S from './styles'

export type CheckoutProps = {
  daily_price: number
}

function Checkout({ daily_price }: CheckoutProps) {
  return (
    <S.Wrapper>
      <h4>
        R$ {daily_price} <span>/ noite</span>
      </h4>

      <S.InputContainer></S.InputContainer>

      <Button variant="primary" size="large">
        Escolher período do aluguel
      </Button>
    </S.Wrapper>
  )
}

export default Checkout
