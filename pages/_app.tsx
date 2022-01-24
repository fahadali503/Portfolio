import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
