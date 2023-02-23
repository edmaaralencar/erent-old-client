import Header from 'components/Header'
import { ReactNode } from 'react'

import * as S from './styles'

type AppWrapperProps = {
  children: ReactNode
}

function AppWrapper({ children }: AppWrapperProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default AppWrapper
