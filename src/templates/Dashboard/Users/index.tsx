import Pagination from 'components/Pagination'
import Image from 'next/image'
import { useState } from 'react'
import { useUsers } from 'services/hooks/useUsers'
import * as S from './styles'

function UsersTemplate() {
  const [currentPage, setCurrentPage] = useState(1)
  const [registersPerPage, setRegistersPerPage] = useState(5)
  const { data } = useUsers({ currentPage, registersPerPage })

  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th></S.Th>
            <S.Th className="name">Usuário</S.Th>
            <S.Th className="email">E-mail</S.Th>
            <S.Th>Aluguéis</S.Th>
            <S.Th>Cargo</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {data?.users.map((user: any) => (
            <S.Tr key={user.id}>
              <S.Td>
                <Image
                  className="avatar"
                  src={
                    (user.avatar &&
                      `http://localhost:3333/files/${user.avatar}`) ||
                    '/avatar.png'
                  }
                  width={38}
                  height={38}
                />
              </S.Td>
              <S.Td className="name">{user.name}</S.Td>
              <S.Td className="email">{user.email}</S.Td>
              <S.Td>{user.rentals}</S.Td>
              <S.Td>{user.role}</S.Td>
            </S.Tr>
          ))}
        </tbody>
      </S.Table>

      <Pagination
        totalCountOfRegisters={data?.totalCount}
        currentPage={currentPage}
        perPage={registersPerPage}
        onPageChange={setCurrentPage}
      />
    </S.Wrapper>
  )
}

export default UsersTemplate
