import axios from 'axios'
import { signOut } from 'context/AuthContext'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { AuthTokenError } from './errors/AuthTokenError'

type Context = undefined | GetServerSidePropsContext

export function setupAPIClient(ctx: Context | undefined = undefined) {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['erent.token']}`
    }
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    (error: any) => {
      if (error.response.statusCode === 401) {
        if (typeof window !== undefined) {
          signOut()
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}
