import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HOST } from '../config'
import SearchBar from '../components/SearchBar'
import EmployeeTable from '../components/EmployeeTable'
import PaginationGroup from '../components/PaginationGroup'
import ListAnimation from '../components/ListAnimation'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home({ searchValue, setSearchValue }) {
  const [sortBy, setSortBy] = useState({ sort: 'lastName', asce: true })
  const router = useRouter()

  /** TODO:
   * need to handle query that makes no sense, for example /?page=100
   * when there are only 10 pages total
   */
  const { data, error } = useSWR(
    () => `${HOST}/api/employees${router.asPath}`,
    fetcher
  )

  if (error) {
    /** TODO:
     * Add a error page
     */
    return <p>Failed to load data, please try again</p>
  }

  /**
   * Loading animation
   */
  if (!data && !error) {
    return (
      <div className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <ListAnimation />
      </div>
    )
  }
  const { employees, pageData } = data
  return (
    <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sortBy={sortBy}
      />
      <EmployeeTable
        employees={employees}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchValue={searchValue}
      />

      <PaginationGroup
        pageData={pageData}
        searchValue={searchValue}
        sortBy={sortBy}
      />
    </main>
  )
}
