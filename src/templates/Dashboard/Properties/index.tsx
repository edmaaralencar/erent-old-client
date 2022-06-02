import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { FiEdit3, FiTrash } from 'react-icons/fi'
import { useProperties } from 'services/hooks/useProperties'
import { queryClient } from 'services/queryClient'

import IconButton from 'components/IconButton'
import ModalDelete from 'components/ModalDelete'
import Button from 'components/Button'
import Pagination from 'components/Pagination'

import * as S from './styles'
import api from 'services/apiClient'

function PropertiesTemplate() {
  const [currentPage, setCurrentPage] = useState(1)
  const [registersPerPage, setRegistersPerPage] = useState(9)
  const [modalOpen, setModalOpen] = useState({
    isModalOpen: false,
    id: 0
  })

  const { data, isLoading, isFetching, error } = useProperties({
    currentPage,
    registersPerPage
  })

  function handleDeleteProperty(id: number) {
    setModalOpen({ isModalOpen: true, id })
  }

  function handleCloseModal() {
    setModalOpen({ isModalOpen: false, id: 0 })
  }

  async function handlePrefetchProperty(id: string) {
    await queryClient.prefetchQuery(
      ['property', id],
      async () => {
        const { data } = await api.get(`/properties/${id}`)

        return data
      },
      {
        staleTime: 1000 * 60 * 10
      }
    )
  }

  return (
    <S.Wrapper>
      <ModalDelete
        title="Deletar a propriedade"
        description="Você tem certeza que deseja deletar a propriedade?"
        handleCloseModal={handleCloseModal}
        isModalOpen={modalOpen.isModalOpen}
        id={modalOpen.id}
      />
      <S.PropertiesContainer>
        {data?.properties.map((property: any) => (
          <S.Property key={property.id}>
            <S.ImageContainer>
              <Image
                className="property-image"
                src={
                  property.images[0]
                    ? property.images[0].image_url
                    : '/image.png'
                }
                alt={property.name}
                layout="fill"
              />
              <S.ButtonContainer>
                <IconButton
                  variant="white"
                  onClick={() => handleDeleteProperty(property.id)}
                  icon={<FiTrash size={20} className="icon" />}
                />
                <Link
                  href={`/dashboard/properties/edit/${property.id}`}
                  passHref
                >
                  <IconButton
                    variant="white"
                    as="a"
                    icon={<FiEdit3 size={20} className="icon" />}
                  />
                </Link>
              </S.ButtonContainer>
            </S.ImageContainer>
            <S.Body>
              <strong>{property.name}</strong>
              <span className="city">{property.city}</span>
              <Link href={`/dashboard/properties/${property.id}`} passHref>
                <Button
                  as="a"
                  className="button"
                  size="small"
                  variant="primary"
                  onMouseEnter={() => handlePrefetchProperty(property.id)}
                >
                  Ver mais
                </Button>
              </Link>
            </S.Body>
          </S.Property>
        ))}
      </S.PropertiesContainer>
      <Pagination
        totalCountOfRegisters={data?.totalCount}
        currentPage={currentPage}
        perPage={registersPerPage}
        onPageChange={setCurrentPage}
      />
    </S.Wrapper>
  )
}

export default PropertiesTemplate
