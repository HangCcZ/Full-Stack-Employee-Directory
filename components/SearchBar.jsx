import { useRouter } from 'next/router'

import { HOST } from '../config'

export default function SearchBar({
  searchValue = '',
  setSearchValue,
  sortBy,
}) {
  const router = useRouter()

  /** TODO: Perhaps use context here to aggregate all query string values
   *
   */
  const handleSearchClick = () => {
    if (searchValue !== '') {
      router.push(
        `${HOST}/?search=${searchValue}&sort=${sortBy.sort}&asce=${sortBy.asce}`
      )
      setSearchValue(() => searchValue)
    } else {
      router.push(`${HOST}`)
    }
  }

  const handleSearchEnter = (e) => {
    if (searchValue !== '' && e.key === 'Enter') {
      router.push(
        `${HOST}/?search=${searchValue}&sort=${sortBy.sort}&asce=${sortBy.asce}`
      )
      setSearchValue(() => searchValue)
    } else if (
      (searchValue === '' && e.key === 'Enter') ||
      (searchValue.length === 1 && e.key === 'Backspace')
    ) {
      router.push(`${HOST}`)
    }
  }

  const handleSearchDelete = (e) => {
    if (searchValue.length === 1 && e.key === 'Backspace') {
      setSearchValue(() => '')
      router.push(`${HOST}/?sort=${sortBy.sort}&asce=${sortBy.asce}`)
    }
  }

  return (
    /**
     * Add drop down to select all/department/title/name, put search bar on right
     * inspired by amazon.com
     * dropdown --- searchInput --- searchIcon --- sort by
     */
    <div className="mx-auto flex w-10/12 justify-center rounded-xl border border-gray-300 bg-gray-100 p-2 text-center shadow-sm focus-within:ring-2 focus-within:ring-blue-400 hover:shadow-lg hover:ring-2 md:w-2/3">
      <button type="button" onClick={handleSearchClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-slate-500  hover:stroke-slate-600"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <input
        placeholder="Search"
        type="text"
        className="ml-2 w-full bg-gray-100 focus:outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(() => e.target.value)}
        onKeyPress={handleSearchEnter}
        onKeyDown={handleSearchDelete}
      />
      <button
        onClick={() => {
          setSearchValue(() => '')
          router.push(`${HOST}/`)
        }}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="stroke-slate-500 hover:stroke-slate-600 active:stroke-slate-300"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}
