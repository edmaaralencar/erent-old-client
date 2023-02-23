import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
`

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  max-width: 32rem;

  button,
  a {
    max-width: 100%;
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ForgotPasswordLink = styled.a`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.4rem;
`
