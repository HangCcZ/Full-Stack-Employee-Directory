export default function EmployeeTable({ employees }) {
  const charLimit = 25
  return (
    <div className="mt-6 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    TITLE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    DEPARTMENT
                  </th>
                  {/**span need to be hidden or it will occupy spaces and destory the mobile view */}
                  <th scope="col">
                    <span className="sr-only hidden">View More</span>
                  </th>
                  {/**span need to be hidden or it will occupy spaces and destory the mobile view*/}
                  <th scope="col">
                    <span className="sr-only hidden">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={employee.pictureUrl}
                            alt="employee thumbnail"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="w-10 whitespace-nowrap px-6 py-4 text-left text-sm text-gray-600">
                      {employee.title.length > charLimit
                        ? employee.title.substring(0, charLimit) + '...'
                        : employee.title}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500">
                      {employee.department.length > charLimit
                        ? employee.department.substring(0, charLimit) + '...'
                        : employee.department}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">
                        View More
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
