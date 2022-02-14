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
    return (
      <div className="flex items-center justify-center">
        <button type="button" class="bg-indigo-500" disabled>
          <svg class="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    )
  }

  return (
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
        <SearchBar />
        <EmployeeTable employees={data.data} />
        <PaginationGroup />
      </main>
    </>
  )
}
