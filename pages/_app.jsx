import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Employee Directory - Postlight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-100 pb-4">
        <NavBar setSearchValue={setSearchValue} />
        <Component
          {...pageProps}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
