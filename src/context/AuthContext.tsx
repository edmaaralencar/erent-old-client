import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import api from 'services/apiClient'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Router from 'next/router'

type User = {
  name: string
  email: string
  avatar: string
  isAdmin: boolean
}

type SignInCredentials = {
  email: string
  password: string
}

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: (credentials: SignUpCredentials) => Promise<void>
  signOut: () => void
  user: User
  isAuthenticated: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, 'erent.token')

  Router.push('/')
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'erent.token': token } = parseCookies()

    if (token) {
      api
        .get('/users/me')
        .then(response => {
          const { name, email, avatar, isAdmin } = response.data

          setUser({ name, email, avatar, isAdmin })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password
      })

      const { user, token } = data

      setCookie(undefined, 'erent.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({
        name: user.name,
        avatar: user.avatar,
        email,
        isAdmin: user.isAdmin
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      Router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp({ name, email, password }: SignUpCredentials) {
    try {
      await api.post('/users', {
        name,
        email,
        password
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider
