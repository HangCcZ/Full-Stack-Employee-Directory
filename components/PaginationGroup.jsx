import Link from 'next/link'
import { HOST } from '../config'
export default function PaginationGroup({ pageData }) {
  const renderPageLinks = () => {
    const temp = new Array(pageData.totalPages).fill(0)

    // simple case: render all links if totalPages is under 7
    if (pageData.totalPages <= 7) {
      return temp.map((element, index) => (
        <Link
          href={`${HOST}/?page=${index + 1}`}
          key={`${HOST}/?page=${index + 1}`}
        >
          <a
            className={`${
              pageData.currentPage == index + 1
                ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
                : ''
            } relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50`}
          >
            {index + 1}
          </a>
        </Link>
      ))
    } else {
      /**
       *  trick case: what happen when page is more than 7 ?
       *  last 3 links can always link to the last 3 pages
       *  */
    }
  }
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {pageData.prevPage && (
          <Link href={`${HOST}/?page=${pageData.prevPage}`}>
            <a className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
          </Link>
        )}
        {pageData.nextPage && (
          <Link href={`${HOST}/?page=${pageData.nextPage}`}>
            <a className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </Link>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {Math.min(
                pageData.currentPage * pageData.limit - (pageData.limit - 1),
                pageData.totalEmployees
              )}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(
                pageData.limit * pageData.currentPage,
                pageData.totalEmployees
              )}
            </span>{' '}
            of <span className="font-medium">{pageData.totalEmployees}</span>{' '}
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {pageData.prevPage && (
              <Link href={`${HOST}/?page=${pageData.prevPage}`}>
                <a className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
              </Link>
            )}

            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {renderPageLinks()}
            {pageData.nextPage && (
              <Link href={`${HOST}/?page=${pageData.nextPage}`}>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
