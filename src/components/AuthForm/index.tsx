import Button from 'components/Button'
import Heading from 'components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

export type AuthFormProps = {
  title: string
  children: ReactNode
  type: 'login' | 'register'
  onSubmit: (value: any) => void
}

function AuthForm({ title, children, type, onSubmit }: AuthFormProps) {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image src="/home.jpg" layout="fill" />
      </S.ImageContainer>
      <S.FormWrapper onSubmit={onSubmit}>
        <S.Container>
          <Heading weight="medium" size="medium">
            {title}
          </Heading>
          <S.InputContainer>{children}</S.InputContainer>
          <S.ButtonContainer>
            <Button size="small">
              {type === 'login' ? 'Entrar' : 'Criar conta'}
            </Button>
            <Button
              size="small"
              variant="outlined"
              as="a"
              href={type == 'login' ? '/sign-up' : '/sign-in'}
            >
              {type === 'login' ? 'Cria sua conta' : 'Faça login'}
            </Button>
            <p>ou</p>
            <Link href="/forgot-password" passHref>
              <S.ForgotPasswordLink>
                Esqueceu sua senha? Clique aqui
              </S.ForgotPasswordLink>
            </Link>
          </S.ButtonContainer>
        </S.Container>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default AuthForm
