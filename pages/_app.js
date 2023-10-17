import '@/styles/globals.scss'
import Layout from '@/components/layout';

import dynamic from 'next/dynamic';

const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
