import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Employee Directory - Postlight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-100 pb-4">
        <NavBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
