import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="flex w-11/12 max-w-5xl justify-between px-2 text-center">
      <Link href="/">
        <a className="p-2 font-semibold text-gray-600 hover:rounded-lg hover:bg-blue-500 hover:text-gray-50 active:bg-blue-200">
          Home
        </a>
      </Link>
      <Link href="/new">
        <a className="p-2 font-semibold text-gray-600 hover:rounded-lg hover:bg-blue-500 hover:text-gray-50 active:bg-blue-200">
          Add Employee
        </a>
      </Link>
    </div>
  )
}
