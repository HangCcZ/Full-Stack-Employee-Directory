import EmployeeItem from './EmployeeItem'

export default function EmployeeTable({ employees, sortBy, setSortBy }) {
  const onNameClick = () => {
    /**
     * If it is already sort by lastName, that means we want to flip the  
     ascending and descending.
     Else：sort by ascending -  A->Z
    */
    if (sortBy.sort == 'lastName') {
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
    } else {
      setSortBy(() => ({ sort: 'lastName', asce: true }))
    }
  }

  const onTitleClick = () => {
    if (sortBy.sort == 'title') {
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
    } else {
      setSortBy(() => ({ sort: 'title', asce: true }))
    }
  }

  const onDepartmentClick = () => {
    if (sortBy.sort == 'department') {
      setSortBy(() => ({ sort: sortBy.sort, asce: !sortBy.asce }))
    } else {
      setSortBy(() => ({ sort: 'department', asce: true }))
    }
  }

  return (
    <div className="mt-6 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onNameClick}
                    >
                      <div className="flex items-center">
                        <h3>Name</h3>
                        <div className="ml-1 inline flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'lastName' && sortBy.asce == true
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'lastName' && sortBy.asce == false
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
                        </div>
                      </div>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onTitleClick}
                    >
                      <div className="flex items-center">
                        <h3>TITLE</h3>
                        <div className="ml-1 inline flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'title' && sortBy.asce == true
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'title' && sortBy.asce == false
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
                        </div>
                      </div>
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left ">
                    <button
                      className="text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      onClick={onDepartmentClick}
                    >
                      <div className="flex items-center">
                        <h3>DEPARTMENT</h3>
                        <div className="ml-1 inline flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'department' && sortBy.asce == true
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              sortBy.sort == 'department' &&
                              sortBy.asce == false
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
                        </div>
                      </div>
                    </button>
                  </th>
                  {/**span need to be hidden or it will occupy spaces and destory the mobile view */}
                  <th scope="col">
                    <span className="sr-only hidden">Edit</span>
                  </th>
                  {/**span need to be hidden or it will occupy spaces and destory the mobile view*/}
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
