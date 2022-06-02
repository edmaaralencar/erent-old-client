import { useQuery } from 'react-query'
import api from 'services/apiClient'

export type Option = {
  id: string
  name: string
  created_at: Date
}

export async function getOptions() {
  const { data } = await api.get('/options')

  const options = data.map((option: Option) => {
    return {
      id: option.id,
      name: option.name,
      created_at: new Date(option.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return options
}

export function useOptions() {
  return useQuery('options', () => getOptions(), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
