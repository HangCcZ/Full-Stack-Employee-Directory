import { HOST } from '../config'
import useSWR from 'swr'
import SearchBar from '../components/SearchBar'
import EmployeeTable from '../components/EmployeeTable'
import PaginationGroup from '../components/PaginationGroup'
import { useRouter } from 'next/router'
import { useState } from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  /**TODO:
   * need to handle query that makes no sense, for example /?page=100
   * when there are only 10 pages total
   */
  const { data, error } = useSWR(() => {
    if (router.query.page && router.query.search) {
      return `${HOST}/api/employees/?page=${router.query.page}&search=${router.query.search}`
    } else if (router.query.page) {
      return `${HOST}/api/employees/?page=${router.query.page}`
    } else if (router.query.search) {
      return `${HOST}/api/employees/?search=${router.query.search}`
    } else {
      return `${HOST}/api/employees`
    }
  }, fetcher)

  if (error) {
    return <p>Failed to load data, please try again</p>
  }

  if (!data & !error) {
    //TODO - minor issue: Add loading animate
    return (
      <div className="flex items-center justify-center">
        <button type="button" className="bg-indigo-500" disabled>
          <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    )
  }

  const { employees, pageData } = data

  return (
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <EmployeeTable employees={employees} />
        <PaginationGroup pageData={pageData} />
      </main>
    </>
  )
}
