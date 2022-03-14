import CreateForm from '../components/CreateForm'

export default function New({ notify }) {
  return (
    <main className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 sm:px-20">
      <CreateForm preloaded={{}} isNew notify={notify} />
    </main>
  )
}
