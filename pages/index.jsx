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
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center sm:px-20">
        <SearchBar />
        <EmployeeTable employees={data.data} />
        {/**TODO:
         * This PaginationGroup constrains the whole container,
         * NarBar is expanded if PaginationGroup is not included*/}
        <PaginationGroup />
      </main>
    </>
  )
}
