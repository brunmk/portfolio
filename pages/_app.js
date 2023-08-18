import "bootstrap/dist/css/bootstrap.css";
import '@/styles/globals.css'

import dynamic from 'next/dynamic';

const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
