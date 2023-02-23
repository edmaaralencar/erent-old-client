import { yupResolver } from '@hookform/resolvers/yup'
import AccountWrapper from 'components/AccountWrapper'
import Input from 'components/Input'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import Button from 'components/Button'
import api from 'services/apiClient'
import { toast } from 'react-toastify'

const updateProfileSchema = yup.object().shape({
  old_password: yup.string().required('Senha antiga é obrigatória.'),
  new_password: yup.string().required('Senha nova é obrigatória.')
})

type FormInput = {
  old_password: string
  new_password: string
}

function ChangePasswordTemplate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInput>({
    resolver: yupResolver(updateProfileSchema)
  })

  async function handleChangePassword(values: FormInput) {
    try {
      await api.patch('/passwords', values)
      toast.success('Senha trocada com sucesso.')
      reset()
    } catch (error: any) {
      if (error.response.data.status === 'error') {
        return toast.error('Senha atual incorreta.')
      }

      toast.error('Ocorreu um erro. Tente novamente mais tarde.')
    }
  }

  return (
    <AccountWrapper title="Trocar senha">
      <S.Wrapper onSubmit={handleSubmit(handleChangePassword)}>
        <S.InputContainer>
          <Input
            type="password"
            variant="outlined"
            label="Senha antiga"
            error={errors.old_password as { message: string }}
            {...register('old_password')}
          />
          <Input
            type="password"
            variant="outlined"
            label="Senha nova"
            error={errors.new_password as { message: string }}
            {...register('new_password')}
          />
        </S.InputContainer>
        <Button size="large" type="submit">
          Salvar alterações
        </Button>
      </S.Wrapper>
    </AccountWrapper>
  )
}

export default ChangePasswordTemplate
