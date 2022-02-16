import Link from 'next/link'
import DeletionModal from './DeletionModal'
import { HOST } from '../config'
export default function EmployeeItem({ index }) {
  const charLimit = 25
  return (
    <tr key={index}>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex items-center text-left">
          <div className="h-10 w-10 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-slate-500"></div>
          </div>
          <div className="ml-4">
            <div className="h-4 w-32 rounded-md bg-slate-500"></div>
            <div className="mt-2 h-4 w-48 rounded-md bg-slate-500"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-20 bg-gray-500"></div>
      </td>
      <td className=" px-6 py-4">
        <div className="h-4 w-24 bg-gray-500"></div>
      </td>
      <td className=" px-6 py-4">
        <div className="h-5 w-5 rounded-none bg-gray-500"></div>
      </td>
      <td className=" px-6 py-4">
        <div className="h-5 w-5 rounded-full bg-gray-500"></div>
      </td>

      <td className=" px-6 py-4">
        <div className="h-5 w-5 rounded-md bg-gray-500 "></div>
      </td>
    </tr>
  )
}
