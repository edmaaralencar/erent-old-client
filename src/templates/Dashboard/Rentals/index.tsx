import Pagination from 'components/Pagination'
import { useState } from 'react'
import { useRentals } from 'services/hooks/useRentals'
import * as S from './styles'

const rentals = [
  {
    id: 0,
    user: 'Edmar Alencar',
    property: 'Casa na praia - Búzios',
    check_in: '10/02/2023',
    checkout: '15/02/2023',
    total: 'R$ 3000,00'
  },
  {
    id: 1,
    user: 'Edmar Alencar',
    property: 'Casa na praia - Búzios',
    check_in: '10/02/2023',
    checkout: '15/02/2023',
    total: 'R$ 3000,00'
  },
  {
    id: 2,
    user: 'Edmar Alencar',
    property: 'Casa na praia - Búzios',
    check_in: '10/02/2023',
    checkout: '15/02/2023',
    total: 'R$ 3000,00'
  }
]

function RentalsTemplate() {
  const [currentPage, setCurrentPage] = useState(1)
  const [registersPerPage, setRegistersPerPage] = useState(5)

  const { data } = useRentals({ currentPage, registersPerPage })

  return (
    <S.Wrapper>
      <S.ScrollWrapper>
        <S.Table>
          <thead>
            <S.Tr>
              <S.Th>Usuário</S.Th>
              <S.Th className="name">Propriedade</S.Th>
              <S.Th className="email">Check-in</S.Th>
              <S.Th>Checkout</S.Th>
              <S.Th>Total</S.Th>
            </S.Tr>
          </thead>
          <tbody>
            {data?.rentals.map((rental: any) => (
              <S.Tr key={rental.id}>
                <S.Td>{rental?.user}</S.Td>
                <S.Td className="name">{rental?.property?.name}</S.Td>
                <S.Td className="email">{rental?.check_in}</S.Td>
                <S.Td>{rental?.checkout}</S.Td>
                <S.Td>{rental?.total}</S.Td>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      </S.ScrollWrapper>
      <Pagination
        totalCountOfRegisters={data?.totalCount}
        currentPage={currentPage}
        perPage={registersPerPage}
        onPageChange={setCurrentPage}
      />
    </S.Wrapper>
  )
}

export default RentalsTemplate
