import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ config: { useSystemColorMode: true } })}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
