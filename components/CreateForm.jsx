import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function CreateForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    for (const file of data.pictureUrl) {
      formData.append('file', file)
    }
    formData.append('upload_preset', 'postlight-uploads')

    let cloudinaryData = null
    try {
      cloudinaryData = await axios.post(
        'https://api.cloudinary.com/v1_1/doyzkjrey/image/upload',
        formData
      )
      data.pictureUrl = cloudinaryData.data.url
    } catch (error) {
      //TODO: Triggle a fail notification
      return <p>Error when uploading image </p>
    }

    try {
      const response = await axios.post('./api/employees', data)
      if (response.status == 201) {
        router.push('/')
        //TODO: Triggle a success notification
      }
    } catch (error) {
      //TODO: Triggle a fail notification
      return <p>Error when creating new employee profile </p>
    }
  }

  //TODO: Need to add style
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
              {...register('name', { required: true, maxLength: 80 })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Title"
              {...register('title', { required: true })}
            />
            <input
              type="text"
              className="outline-none"
              placeholder="Department"
              {...register('department', { required: true })}
            />
            <input
              type="file"
              {...register('pictureUrl', { required: true })}
            ></input>
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
