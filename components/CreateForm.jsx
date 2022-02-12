import { useForm } from 'react-hook-form'
import axios from 'axios'
export default function CreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    // const response = await axios.post('./api/employees', data)
  }

  return (
    <div className="mt-4 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Employee Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Create a new profile for
              </p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none"
              type="text"
              placeholder="Full Name"
              {...register('Full Name', { required: true, maxLength: 80 })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Email"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Title"
              {...register('Title', { required: true })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Department"
              {...register('Department', { required: true })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Location"
              {...register('location', { required: true })}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
