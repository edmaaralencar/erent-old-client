import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from 'services/apiClient'
import * as yup from 'yup'
import * as S from '../styles'

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required('Senha é obrigatória.')
})

type FormInput = {
  password: string
}

type ResetPasswordProps = {
  token: string
}

function ResetPassword({ token }: ResetPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(resetPasswordSchema)
  })

  const router = useRouter()

  async function handleResetPassword(values: FormInput) {
    console.log(values)

    const data = {
      ...values,
      token
    }

    try {
      await api.post('/passwords/reset', data)

      toast.success(
        'Sua senha foi resetada com sucesso e você será redirecionado para a página de Login.'
      )

      router.push('/sign-in')
    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente mais tarde.')
      console.log(error)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleResetPassword)}>
      <Heading level={1} weight="medium" size="small">
        Digite sua senha nova
      </Heading>

      <S.InputContainer>
        <Input
          variant="outlined"
          label="Senha"
          type="password"
          error={errors.password as { message: string }}
          {...register('password')}
        />
        <Button type="submit">Resetar senha</Button>
      </S.InputContainer>

      <Link href="/sign-in">Fazer login</Link>
    </S.Wrapper>
  )
}

export default ResetPassword
