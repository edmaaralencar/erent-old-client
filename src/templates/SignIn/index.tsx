import { yupResolver } from '@hookform/resolvers/yup'
import AuthForm from 'components/AuthForm'
import Input from 'components/Input'
import { SignInCredentials, useAuth } from 'context/AuthContext'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.'),
  password: yup.string().required('Senha obrigatório.')
})

function SignInTemplate() {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInCredentials>({
    resolver: yupResolver(signUpSchema)
  })

  async function handleSignIn(values: SignInCredentials) {
    console.log(values)
    const { email, password } = values
    await signIn({ email, password })
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(handleSignIn)}
      title="Faça seu login"
      type="login"
    >
      <Input
        variant="outlined"
        label="E-mail"
        error={errors.email as { message: string }}
        {...register('email')}
      />
      <Input
        type="password"
        variant="outlined"
        label="Senha"
        error={errors.password as { message: string }}
        {...register('password')}
      />
    </AuthForm>
  )
}

export default SignInTemplate
