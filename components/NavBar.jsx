import Link from 'next/link'
import { HOST } from '../config'
export default function NavBar() {
  return (
    <div className="flex w-11/12 max-w-5xl justify-between py-4 px-2 text-center">
      <Link href={`${HOST}/`}>
        <a className="p-2 font-semibold text-blue-500 hover:rounded-lg hover:bg-blue-500 hover:text-gray-50 active:bg-blue-200">
          Home
        </a>
      </Link>
      <Link href={`${HOST}/new`}>
        <a className="p-2 font-semibold text-blue-500 hover:rounded-lg hover:bg-blue-500 hover:text-gray-50 active:bg-blue-200">
          Add Employee
        </a>
      </Link>
    </div>
  )
}
