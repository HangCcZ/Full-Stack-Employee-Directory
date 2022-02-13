import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import EmployeeTable from '../components/EmployeeTable'
import PaginationGroup from '../components/PaginationGroup'
import CreateForm from '../components/CreateForm'
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('./api/employees', fetcher)

  if (error) {
    useRouter.push('/')
  }
  if (!data & !error) {
    //TODO - minor issue: Add loading animate
    return <div>Loading...</div>
  }

  return (
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center sm:px-20">
        <SearchBar />
        <EmployeeTable employees={data.data} />
        {/**TODO - minor issue:
         * This PaginationGroup constrains the whole container,
         * NarBar is expanded if PaginationGroup is not included*/}
        <PaginationGroup />
      </main>
    </>
  )
}
