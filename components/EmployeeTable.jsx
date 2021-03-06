/* eslint-disable brace-style */
import { useRouter } from 'next/router'
import EmployeeItem from './EmployeeItem'
import { HOST } from '../config'

export default function EmployeeTable({
  employees,
  sortBy,
  setSortBy,
  searchValue,
}) {
  const router = useRouter()
  const onNameClick = () => {
    /**
     * If it is already sort by lastName, that means we want to flip the  
     ascending and descending.
     Else：sort by ascending -  A->Z
    */

    /** TODO:
     *  Rename "asce" to "order" instead
     */
    if (sortBy.sort === 'lastName') {
      const asceOrder = !sortBy.asce
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
      router.push(
        `${HOST}/?search=${searchValue}&sort=lastName&asce=${asceOrder}`
      )
    } else {
      setSortBy(() => ({ sort: 'lastName', asce: true }))
      router.push(`${HOST}/?search=${searchValue}&sort=lastName&asce=true`)
    }
  }

  const onTitleClick = () => {
    if (sortBy.sort === 'title') {
      const asceOrder = !sortBy.asce
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
      router.push(`${HOST}/?search=${searchValue}&sort=title&asce=${asceOrder}`)
    } else {
      setSortBy(() => ({ sort: 'title', asce: true }))
      router.push(`${HOST}/?search=${searchValue}&sort=title&asce=true`)
    }
  }

  const onDepartmentClick = () => {
    if (sortBy.sort === 'department') {
      const asceOrder = !sortBy.asce
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
      router.push(
        `${HOST}/?search=${searchValue}&sort=department&asce=${asceOrder}`
      )
    } else {
      setSortBy(() => ({ sort: 'department', asce: true }))
      router.push(`${HOST}/?search=${searchValue}&sort=department&asce=true`)
    }
  }

  return (
    <div className="mt-6 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-t-lg border border-b-0 border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      type="button"
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onNameClick}
                    >
                      <div className="flex items-center">
                        <h3>Name</h3>
                        <div className="ml-1 inline flex-col">
                          <UpArrowForName router={router} sortBy={sortBy} />
                          <DownArrowForName router={router} sortBy={sortBy} />
                        </div>
                      </div>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      type="button"
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onTitleClick}
                    >
                      <div className="flex items-center">
                        <h3>TITLE</h3>
                        <div className="ml-1 inline flex-col">
                          <UpArrowForTitle router={router} sortBy={sortBy} />
                          <DownArrowForTitle router={router} sortBy={sortBy} />
                        </div>
                      </div>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      type="button"
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onDepartmentClick}
                    >
                      <div className="flex items-center">
                        <h3>DEPARTMENT</h3>
                        <div className="ml-1 inline flex-col">
                          <UpArrowForDepartment
                            router={router}
                            sortBy={sortBy}
                          />
                          <DownArrowForDepartment
                            router={router}
                            sortBy={sortBy}
                          />
                        </div>
                      </div>
                    </button>
                  </th>
                  <th scope="col">
                    <span className="sr-only hidden">Edit</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only hidden">View More</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only hidden">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {employees.map((employee) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <EmployeeItem employee={employee} key={employee._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function UpArrowForName({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        !router.query.sort ||
        (sortBy.sort === 'lastName' && sortBy.asce === true)
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  )
}

function DownArrowForName({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        router.query.sort && sortBy.sort === 'lastName' && sortBy.asce === false
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 13l-5 5m0 0l-5-5m5 5V6"
      />
    </svg>
  )
}

function UpArrowForTitle({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        router.query.sort && sortBy.sort === 'title' && sortBy.asce === true
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  )
}

function DownArrowForTitle({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        router.query.sort && sortBy.sort === 'title' && sortBy.asce === false
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 13l-5 5m0 0l-5-5m5 5V6"
      />
    </svg>
  )
}

function UpArrowForDepartment({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        router.query.sort &&
        sortBy.sort === 'department' &&
        sortBy.asce === true
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  )
}

function DownArrowForDepartment({ router, sortBy }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${
        router.query.sort &&
        sortBy.sort === 'department' &&
        sortBy.asce === false
          ? 'stroke-slate-800'
          : 'stroke-slate-200'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 13l-5 5m0 0l-5-5m5 5V6"
      />
    </svg>
  )
}
