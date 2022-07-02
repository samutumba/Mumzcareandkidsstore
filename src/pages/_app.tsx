import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContentProvider } from '../hooks'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <ContentProvider>
      <Component {...pageProps} />
    </ContentProvider>
  );
}



export default MyApp
