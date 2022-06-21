import { useAuth } from 'context/AuthContext'
import { ReactNode } from 'react'

interface CanProps {
  children: ReactNode
  isAdmin?: boolean
}

function Can({ children, isAdmin = false }: CanProps) {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  if (isAdmin) {
    if (!user?.isAdmin) {
      return null
    }
  }

  return <>{children}</>
}

export default Can
