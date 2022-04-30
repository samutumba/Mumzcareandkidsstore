import '../styles/globals.css'
import { GetServerSideProps } from "next"; 
import type { AppProps } from 'next/app'
import { ContentProvider } from '../hooks'
import axios from 'axios';
import { Layout } from "./../components";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ContentProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ContentProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: items.data,
    },
  };
}; 


export default MyApp
