import '../styles/globals.css'
import { GetServerSideProps } from "next"; 
import type { AppProps } from 'next/app'
import { ContentProvider } from '../hooks'
import axios from 'axios';
import { Layout } from "./../components";
import { selector } from 'recoil';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ContentProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ContentProvider>
  );
}



export default MyApp
