import { useQuery } from 'react-query'
import api from 'services/apiClient'

export type User = {
  id: string
  name: string
  email: string
  avatar: string
  isAdmin: boolean
  created_at: Date
}

type FunctionProps = {
  currentPage: number
  registersPerPage: number
}

export async function getUsers({
  currentPage,
  registersPerPage
}: FunctionProps) {
  const { data } = await api.get(
    `/users?page=${currentPage}&per_page=${registersPerPage}`
  )

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      role: user.isAdmin ? 'Administrador' : 'Usuário'
    }
  })

  return { users, totalCount: data.usersCount }
}

export function useUsers({ currentPage, registersPerPage }: FunctionProps) {
  return useQuery(
    ['users', currentPage],
    () => getUsers({ currentPage, registersPerPage }),
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
