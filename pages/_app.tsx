import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router';
import { Loader } from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => setLoading(false);
  }, [])

  return <>
    <>
      {
        loading ?
          <Loader />
          : <div>
            <Component {...pageProps} />
          </div>
      }
    </>
  </>
}

export default MyApp
