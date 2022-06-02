import { useRef, useState } from 'react'
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
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useOptions } from 'services/hooks/useOptions'

type Option = {
  name: string
  id: string
}

const createPropertyFormSchema = yup.object().shape({
  name: yup.string().required('Nome da propriedade obrigatória.'),
  description: yup.string().required('Descrição obrigatória.'),
  city: yup.string().required('Cidade obrigatória.'),
  region: yup.string().required('Região obrigatória.'),
  daily_price: yup
    .number()
    .typeError('Você deve especificar um número.')
    .required('Diária obrigatória.'),
  rooms: yup
    .number()
    .typeError('Você deve especificar um número.')
    .required('Quantidade de quartos obrigatório.'),
  bathrooms: yup
    .number()
    .typeError('Você deve especificar um número.')
    .required('Quantidade de banheiros obrigatório.'),
  size: yup
    .number()
    .typeError('Você deve especificar um número.')
    .required('Tamanho obrigatório.'),
  capacity: yup
    .number()
    .typeError('Você deve especificar um número.')
    .required('Capacidade obrigatória.')
})

function CreatePropertyTemplate() {
  const router = useRouter()
  const [images, setImages] = useState<{ fileName: string; size: number }[]>([])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState<any[]>([])
  const filesElement = useRef<any>(null)

  const { data } = useOptions()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(createPropertyFormSchema) })

  const createProperty = useMutation(
    async (property: any) => {
      const response = await api.post('/properties', property)

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('properties')
      }
    }
  )

  const handleCreateProperty: SubmitHandler<FieldValues> = async (
    values: any
  ) => {
    const property = {
      ...values,
      options: JSON.stringify(options)
    }
    const formData = new FormData()
    for (const file of filesElement.current.files) {
      formData.append('file', file)
    }

    for (const key in property) {
      formData.append(key, property[key])
    }

    await createProperty.mutateAsync(formData)
    reset()
    router.push('/dashboard/properties')
    toast.success('Propriedade com sucesso.')
  }

  async function handleAddImages() {
    const formData = new FormData()
    for (const file of filesElement.current.files) {
      formData.append('file', file)
    }

    const files = Array.from(formData)

    setImages(
      files.map((file: any) => {
        const fileFormatted = {
          fileName: file[1].name,
          size: file[1].size
        }
        return fileFormatted
      })
    )
  }

  function handleToggleOptions() {
    setOpenOptions(prevState => !prevState)
  }

  function addOption(option: Option) {
    if (options.some(item => item.id === option.id)) {
      setOptions(prevState => prevState.filter(item => item.id !== option.id))
      return
    }
    setOptions(prevState => [...prevState, option])
  }

  return (
    <S.Wrapper>
      <FormWrapper
        cancelHref="/dashboard/properties"
        onSubmit={handleSubmit(handleCreateProperty)}
        isSubmitting={isSubmitting}
      >
        <Input
          variant="normal"
          label="Nome da propriedade"
          error={errors.name}
          {...register('name')}
        />
        <S.Upload>
          <input
            multiple
            ref={filesElement}
            onChange={() => handleAddImages()}
            type="file"
            id="upload-button"
            hidden
          />
          <label className="upload-label" htmlFor="">
            Imagens
          </label>
          <label className="upload-button" htmlFor="upload-button">
            + Adicionar uma foto
          </label>
        </S.Upload>
        {images.length > 0 && (
          <S.ListImages>
            {images.map((image, index) => (
              <li key={index}>
                {image.fileName} - {image.size} bytes
              </li>
            ))}
          </S.ListImages>
        )}
        <S.OptionsContainer>
          <S.OptionButton onClick={handleToggleOptions} type="button">
            Escolha as opções presentes na propriedade
            {openOptions ? (
              <FiChevronUp size={30} color="#AEAEB3" />
            ) : (
              <FiChevronDown size={30} color="#AEAEB3" />
            )}
          </S.OptionButton>
          <S.Options showOptions={openOptions}>
            {data?.map((option: Option) => (
              <S.Option
                type="button"
                key={option.id}
                onClick={() => addOption(option)}
                isOptionSelected={options.some(item => item.id === option.id)}
              >
                {option.name}
              </S.Option>
            ))}
          </S.Options>
        </S.OptionsContainer>
        <Input
          variant="normal"
          label="Cidade"
          error={errors.city}
          {...register('city')}
        />
        <Input
          variant="normal"
          label="Região"
          error={errors.region}
          {...register('region')}
        />
        <S.Textarea>
          <label htmlFor="description">Descrição</label>
          <textarea {...register('description')} />
          {!!errors.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </S.Textarea>
        <Input
          variant="normal"
          label="Diária"
          error={errors.daily_price}
          type="number"
          {...register('daily_price')}
        />
        <Input
          variant="normal"
          label="Capacidade"
          error={errors.capacity}
          type="number"
          {...register('capacity')}
        />
        <Input
          variant="normal"
          label="Tamanho (em m2)"
          error={errors.size}
          type="number"
          {...register('size')}
        />
        <Input
          variant="normal"
          label="Quartos"
          error={errors.rooms}
          type="number"
          {...register('rooms')}
        />
        <Input
          variant="normal"
          label="Banheiros"
          error={errors.bathrooms}
          type="number"
          {...register('bathrooms')}
        />
      </FormWrapper>
    </S.Wrapper>
  )
}

export default CreatePropertyTemplate
