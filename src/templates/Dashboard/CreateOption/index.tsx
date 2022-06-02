import { useRouter } from 'next/router'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import api from 'services/apiClient'
import { queryClient } from 'services/queryClient'

import FormWrapper from 'components/FormWrapper'
import Input from 'components/Input'

import * as S from './styles'

type Option = {
  name: string
}

const createOptionFormSchema = yup.object().shape({
  name: yup.string().required('Nome da opção obrigatória')
})

function CreateOptionTemplate() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(createOptionFormSchema) })

  const createOption = useMutation(
    async (option: Option) => {
      const response = await api.post('/options', option)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('options')
      }
    }
  )

  const handleCreateUser: SubmitHandler<FieldValues> = async (values: any) => {
    console.log(values)
    await createOption.mutateAsync(values)
    reset()
    router.push('/dashboard/options')
    toast.success('Opção criada com sucesso.')
  }

  return (
    <S.Wrapper>
      <FormWrapper
        cancelHref="/dashboard/options"
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Input
          variant="normal"
          label="Nome da opção"
          error={errors.name}
          {...register('name')}
        />
      </FormWrapper>
    </S.Wrapper>
  )
}

export default CreateOptionTemplate
