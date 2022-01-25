import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader';
import { Toaster } from 'react-hot-toast';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return <>
    <>
      {
        loading ?
          <Loader />
          : <div>
            <Toaster />
            <Component {...pageProps} />
          </div>
      }
    </>
  </>
}

export default MyApp
