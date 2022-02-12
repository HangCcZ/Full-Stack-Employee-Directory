import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Employee Directory - Postlight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-100 py-4">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
