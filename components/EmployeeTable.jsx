import EmployeeItem from './EmployeeItem'

export default function EmployeeTable({ employees }) {
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
                  <EmployeeItem employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
