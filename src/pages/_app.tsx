import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContentProvider } from '../hooks'
import { getSession, GetSessionParams } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <ContentProvider session={session}>
      <Component {...pageProps} />
    </ContentProvider>
  );
}

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}


export default MyApp
