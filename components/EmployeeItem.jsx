import Link from 'next/link'
import DeletionModal from './DeletionModal'
export default function EmployeeItem({ employee }) {
  const charLimit = 25
  return (
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
            <div className="text-sm text-gray-500">{employee.email}</div>
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
        <Link href={`http://localhost:3000/${employee._id}/edit`}>
          <button aria-label="edit-button">
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
                className="text-gray-600"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </Link>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <Link href={`http://localhost:3000/${employee._id}`}>
          <button>
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
                strokeWidth="2"
                className="text-blue-500"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </Link>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <DeletionModal id={employee._id} name={employee.name} />
      </td>
    </tr>
  )
}
