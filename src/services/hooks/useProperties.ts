import { useQuery } from 'react-query'
import api from 'services/apiClient'
import { Option } from './useOptions'

export type Property = {
  id: string
  name: string
  description: string
  city: string
  region: string
  daily_price: number
  rooms: number
  bathrooms: number
  size: number
  capacity: number
  created_at: Date
  options: Option[]
  images: string[]
}

type FunctionProps = {
  currentPage: number
  registersPerPage: number
}

export async function getProperties({
  currentPage,
  registersPerPage
}: FunctionProps) {
  const { data } = await api.get(
    `/properties?page=${currentPage}&per_page=${registersPerPage}`
  )

  const properties = data.properties.map((property: Property) => {
    return {
      id: property.id,
      name: property.name,
      description: property.description,
      city: property.city,
      region: property.region,
      daily_price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(property.daily_price),
      rooms: property.rooms,
      bathrooms: property.bathrooms,
      size: property.size,
      capacity: property.capacity,
      created_at: new Date(property.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      options: property.options,
      images: property.images.map((image: any) => ({
        image_url: `http://localhost:3333/files/${image.image_name}`
      }))
    }
  })

  return { properties, totalCount: data.propertiesCount }
}

export function useProperties({
  currentPage,
  registersPerPage
}: FunctionProps) {
  return useQuery(
    ['properties', currentPage],
    () =>
      getProperties({
        currentPage,
        registersPerPage
      }),
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
