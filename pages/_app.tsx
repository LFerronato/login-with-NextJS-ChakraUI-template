import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// import 'services/logRocket'
import { useAuthStore } from 'modules/auth/useAuthStore'
import { Loading } from 'modules/shared/Loading'
import LoginPage from '../pages/login'

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter()
  const { authStatus, token } = useAuthStore()
  console.log('authStatus =>', authStatus, '| token =>', token)
  // VER https://nextjs.org/docs/authentication
  const ComponentsOptions = {
    'initial': <Loading />,
    'authenticated': <Component {...pageProps} />,
    'toLogin': <LoginPage />,
  }

  return (
    <ChakraProvider
      theme={extendTheme({ config: { initialColorMode: 'dark' } })}
    >
      {ComponentsOptions[authStatus]}
    </ChakraProvider>
  )
}

export default MyApp
