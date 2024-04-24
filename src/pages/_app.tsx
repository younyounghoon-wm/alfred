import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log('APP !');

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
