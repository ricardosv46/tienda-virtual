import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
