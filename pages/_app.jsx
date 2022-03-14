import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css'

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

function MyApp({ Component, pageProps }) {
  const [searchValue, setSearchValue] = useState('')

  const notify = (data, type) => {
    if (type === 'success') {
      toast.success(data, toastConfig)
    } else if (type === 'error') {
      toast.error(data, toastConfig)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Employee Directory - Postlight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center bg-gray-100 pb-4">
        <NavBar setSearchValue={setSearchValue} />
        <ToastContainer />
        <Component
          {...pageProps}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          notify={notify}
        />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
