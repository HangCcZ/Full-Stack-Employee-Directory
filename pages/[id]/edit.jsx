import useSWR from 'swr'
import CreateForm from '../../components/CreateForm'
import { useRouter } from 'next/router'
import { HOST } from '../../config'
import EditAnimation from '../../components/EditAnimation'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Edit() {
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
    return (
      <div className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center sm:px-20">
        <EditAnimation />
      </div>
    )
  }

  const employeeInfo = data.data

  /* backend may return too many data, select needed data only
   * can be refactor via API
   **/
  const employeeForm = {
    firstName: employeeInfo.firstName,
    lastName: employeeInfo.lastName,
    email: employeeInfo.email,
    pictureUrl: employeeInfo.pictureUrl,
    title: employeeInfo.title,
    department: employeeInfo.department,
    location: employeeInfo.location,
  }

  return (
    <>
      <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center sm:px-20">
        <CreateForm preloaded={employeeForm} isNew={false} />
      </main>
    </>
  )
}
