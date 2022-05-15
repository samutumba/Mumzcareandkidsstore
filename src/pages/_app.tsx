import '../styles/globals.css'
import { GetServerSideProps } from "next"; 
import type { AppProps } from 'next/app'
import { ContentProvider } from '../hooks'
import axios from 'axios';
import { Layout } from "./../components";
import { selector } from 'recoil';
import { getSession, GetSessionParams } from "next-auth/react";


function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <ContentProvider session={session}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
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
