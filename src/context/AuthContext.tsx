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
import { toast } from 'react-toastify'

type User = {
  name: string
  email: string
  avatar: string
  isAdmin: boolean
  id: string
}

export type SignInCredentials = {
  email: string
  password: string
}

export type SignUpCredentials = {
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
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const { 'erent.token': token } = parseCookies()

    if (token) {
      api
        .get('/users/me')
        .then(response => {
          const { name, email, avatar, isAdmin, id } = response.data

          setUser({ name, email, avatar, isAdmin, id })
          setIsAuthenticated(true)
        })
        .catch(() => {
          signOut()
          setIsAuthenticated(false)
        })
    }
  }, [])

  function signOut() {
    destroyCookie(undefined, 'erent.token')
    setUser({} as User)
    setIsAuthenticated(false)

    Router.push('/')
  }

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
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        email,
        isAdmin: user.isAdmin
      })

      setIsAuthenticated(true)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      Router.push('/')
    } catch (error) {
      toast.error('Credenciais inválidas.')
      console.log(error)
      setIsAuthenticated(false)
    }
  }

  async function signUp({ name, email, password }: SignUpCredentials) {
    try {
      await api.post('/users', {
        name,
        email,
        password
      })

      toast.success('Conta criada com sucesso.')

      Router.push('/sign-in')
    } catch (error) {
      toast.error('Ocorreu um erro.')
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider
