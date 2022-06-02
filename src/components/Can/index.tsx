import { useAuth } from 'context/AuthContext'
import { ReactNode } from 'react'

interface CanProps {
  children: ReactNode
}

function Can({ children }: CanProps) {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  if (!user?.isAdmin) {
    return null
  }

  return <>{children}</>
}

export default Can
