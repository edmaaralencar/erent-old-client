import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import 'dayjs/locale/pt-br'

import AuthProvider from 'context/AuthContext'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { queryClient } from 'services/queryClient'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <AuthProvider>
          {router.pathname.startsWith('/dashboard') ? (
            <GlobalStyles />
          ) : (
            <GlobalStyles removeBg />
          )}

          <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
