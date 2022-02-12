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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register('Full Name', { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Title"
        {...register('Title', { required: true })}
      />
      <input
        type="text"
        placeholder="Department"
        {...register('Department', { required: true })}
      />
      <input
        type="text"
        placeholder="Location"
        {...register('location', { required: true })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
