import { useQuery } from 'react-query'
import api from 'services/apiClient'

export type Rental = {
  id: string
  total: number
  created_at: Date
  check_in: Date
  checkout: Date
  user: {
    name: string
  }
  property_id: string
  property: {
    name: string
    city: string
  }
}

type FunctionProps = {
  currentPage: number
  registersPerPage: number
}

export async function getRentals({
  currentPage,
  registersPerPage
}: FunctionProps) {
  const { data } = await api.get(
    `/rentals/all?page=${currentPage}&per_page=${registersPerPage}`
  )

  const rentals = data.rentals.map((rental: Rental) => {
    return {
      id: rental.id,
      total: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(rental.total),
      user: rental.user.name,
      property_id: rental.property_id,
      property: {
        name: `${rental.property.name} - ${rental.property.city}`
      },
      created_at: new Date(rental.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }),
      check_in: new Date(rental.check_in).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }),
      checkout: new Date(rental.checkout).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      })
    }
  })

  return { rentals, totalCount: data.rentalsCount }
}

export function useRentals({ currentPage, registersPerPage }: FunctionProps) {
  return useQuery(
    ['rentals', currentPage],
    () => getRentals({ currentPage, registersPerPage }),
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
