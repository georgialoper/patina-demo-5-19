import '../styles/globals.css'
import '@upstart/patina-design-system/css-reset'
import type { AppProps } from 'next/app'
import { PatinaProvider } from '@upstart/patina-design-system'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PatinaProvider>
      <Component {...pageProps} />
    </PatinaProvider>
  )
}

export default MyApp
