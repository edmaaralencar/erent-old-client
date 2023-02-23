import { yupResolver } from '@hookform/resolvers/yup'
import AccountWrapper from 'components/AccountWrapper'
import Input from 'components/Input'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import Button from 'components/Button'
import { useAuth } from 'context/AuthContext'

const updateProfileSchema = yup.object().shape({
  email: yup.string(),
  name: yup.string()
})

type FormInput = {
  name: string
  email: string
}

function ProfileTemplate() {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: {
      email: user?.email,
      name: user?.name
    },
    resolver: yupResolver(updateProfileSchema)
  })

  async function handleUpdateUser(values: FormInput) {
    console.log(values)
  }

  return (
    <AccountWrapper title="Perfil">
      <S.Wrapper onSubmit={handleSubmit(handleUpdateUser)}>
        <S.InputContainer>
          <Input
            variant="outlined"
            label="Nome"
            error={errors.name as { message: string }}
            {...register('name')}
          />
          <Input
            variant="outlined"
            label="Email"
            error={errors.email as { message: string }}
            {...register('email')}
          />
        </S.InputContainer>
        <Button size="large" type="submit">
          Salvar alterações
        </Button>
      </S.Wrapper>
    </AccountWrapper>
  )
}

export default ProfileTemplate
