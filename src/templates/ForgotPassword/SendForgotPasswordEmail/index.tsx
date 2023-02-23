import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as S from '../styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import api from 'services/apiClient'

const sendForgotPasswordEmailSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatório.')
})

type FormInput = {
  email: string
}

function SendForgotPasswordEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(sendForgotPasswordEmailSchema)
  })

  async function handleSendForgotEmail(values: FormInput) {
    console.log(values)
    try {
      await api.post('/passwords/forgot', values)
      toast.success('Um e-mail de reset foi enviado para seu e-mail.')
    } catch (error: any) {
      console.log(error)
      if (
        error.response.data.message === 'There is not a user with this email.'
      ) {
        return toast.error('Não existe um usuário cadastrado com esse email.')
      }
      toast.error('Ocorreu um erro! Tente novamente mais tarde.')
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleSendForgotEmail)}>
      <Heading level={1} weight="medium" size="small">
        Você esqueceu sua senha?
      </Heading>
      <S.Description>
        Digite seu e-mail que você está usando para sua conta e nós enviaremos
        para o seu um email um link de resetar a senha.
      </S.Description>

      <S.InputContainer>
        <Input
          variant="outlined"
          label="E-mail"
          error={errors.email as { message: string }}
          {...register('email')}
        />
        <Button type="submit">Enviar email de reset</Button>
      </S.InputContainer>

      <Link href="/sign-in">Fazer login</Link>
    </S.Wrapper>
  )
}

export default SendForgotPasswordEmail
