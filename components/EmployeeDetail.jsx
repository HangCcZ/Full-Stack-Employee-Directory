import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import EmployeeDetailAnimation from './EmployeeDetailAnimation'
import { HOST } from '../config'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function EmployeeDetail() {
  const router = useRouter()
  const { id } = router.query
  // rename data to employee
  const { data, error } = useSWR(
    id ? `${HOST}/api/employees/${id}` : null,
    fetcher
  )
  if (error) {
    return <p>Failed to load</p>
  }

  if (!data) {
    return <EmployeeDetailAnimation />
  }

  const employeeInfo = data.data

  return (
    <div className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
      <div className="mt-4 min-h-screen text-left sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="flex justify-center px-4 sm:px-2">
              <img
                className="h-50 w-50 ml-2 rounded-full"
                src={employeeInfo.pictureUrl}
                alt="employee thumbnail"
              />
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <h3 className=" block text-sm font-medium text-gray-700">
                      First name
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 px-2 py-2 shadow-sm  sm:text-sm">
                      {employeeInfo.firstName}
                    </p>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Last name
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 px-2 py-2 shadow-sm   sm:text-sm">
                      {employeeInfo.lastName}
                    </p>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Title
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 bg-white py-2 px-3 shadow-sm sm:text-sm">
                      {employeeInfo.title}
                    </p>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Department
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 bg-white py-2 px-3 shadow-sm sm:text-sm">
                      {employeeInfo.department}
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Email
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 px-2 py-2 shadow-sm  sm:text-sm">
                      {employeeInfo.email}
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Location (City)
                    </h3>
                    <p className="mt-1 block w-full rounded-md border border-dashed border-gray-300 px-2 py-2 shadow-sm  sm:text-sm">
                      {employeeInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                <Link href={`${HOST}/`}>
                  <a className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Back
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
