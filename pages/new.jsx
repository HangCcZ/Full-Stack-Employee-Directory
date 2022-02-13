import useSWR from 'swr'
import Head from 'next/head'
import CreateForm from '../components/CreateForm'

export default function New() {
  return (
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center sm:px-20">
        <CreateForm preloaded={{}} isNew={true} />
      </main>
    </>
  )
}
