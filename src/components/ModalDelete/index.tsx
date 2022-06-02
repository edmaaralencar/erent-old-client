import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

// import Image from 'next/image'
import Button from 'components/Button'
import Heading from 'components/Heading'
import api from 'services/apiClient'
import { queryClient } from 'services/queryClient'
import * as S from './styles'

export type ModalDeleteProps = {
  title: string
  description: string
  isModalOpen: boolean
  handleCloseModal: () => void
  id: number
}

function ModalDelete({
  title,
  description,
  isModalOpen,
  handleCloseModal,
  id
}: ModalDeleteProps) {
  const deleteProperty = useMutation(
    async (id: number) => {
      const response = await api.delete(`/properties/${id}`)

      return response
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('properties')
      }
    }
  )

  return (
    <S.Backdrop onClick={handleCloseModal} isModalOpen={isModalOpen}>
      <S.Wrapper onClick={event => event.stopPropagation()}>
        <S.ImageContainer>
          <img src="/error.png" alt="Delete" />
        </S.ImageContainer>
        <Heading color="black" level={3} size="medium">
          {title}
        </Heading>
        <S.Description>{description}</S.Description>
        <S.ButtonContainer>
          <Button onClick={handleCloseModal} size="large" variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              deleteProperty.mutateAsync(id)
              handleCloseModal()
              toast.success('Propriedade deletada com sucesso.')
            }}
            size="large"
            variant="error"
          >
            Deletar a propriedade
          </Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Backdrop>
  )
}

export default ModalDelete
