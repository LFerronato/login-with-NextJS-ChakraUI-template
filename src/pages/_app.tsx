import type { AppProps } from 'next/app'
import '../global.style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
