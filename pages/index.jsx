import useSWR from 'swr'
import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import EmployeeTable from '../components/EmployeeTable'
import PaginationGroup from '../components/PaginationGroup'
import CreateForm from '../components/CreateForm'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('./api/employees', fetcher)

  if (error) {
    //TODO: Push to 404
    return <div></div>
  }
  if (!data & !error) {
    //TODO: Add loading animate
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Employee Directory - Postlight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-20 text-center">
        <SearchBar />
        <EmployeeTable employees={data.data} />
        <PaginationGroup />
        <CreateForm />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
