import { yupResolver } from '@hookform/resolvers/yup'
import AuthForm from 'components/AuthForm'
import Input from 'components/Input'
import { SignUpCredentials, useAuth } from 'context/AuthContext'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.'),
  name: yup.string().required('Nome obrigatório.'),
  password: yup.string().required('Senha obrigatório.')
})

function SignUpTemplate() {
  const { signUp } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpCredentials>({
    resolver: yupResolver(signUpSchema)
  })

  async function handleSignUp(values: SignUpCredentials) {
    const { name, email, password } = values

    await signUp({ name, email, password })
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(handleSignUp)}
      title="Crie sua conta"
      type="register"
    >
      <Input
        variant="outlined"
        label="Nome"
        error={errors.name as { message: string }}
        {...register('name')}
      />
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

export default SignUpTemplate
