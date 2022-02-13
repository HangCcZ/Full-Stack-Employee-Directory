import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function CreateForm({ preloaded, isNew }) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: preloaded ? preloaded : {},
  })

  const updateEmployee = async (data) => {
    const { id } = router.query
    console.log(data.pictureUrl)

    // data.pictureUrl will be type of object (FileList) if image is replaced
    if (typeof data.pictureUrl != 'string') {
      try {
        const formData = new FormData()
        for (const file of data.pictureUrl) {
          formData.append('file', file)
        }
        formData.append('upload_preset', 'postlight-uploads')
        const cloudinaryData = await axios.post(
          'https://api.cloudinary.com/v1_1/doyzkjrey/image/upload',
          formData
        )
        data.pictureUrl = cloudinaryData.data.url
      } catch (error) {
        //TODO: Triggle a fail notification
        return <p>Error when uploading image </p>
      }
    }
    try {
      /**TODO:
       * Absolute route is used here, need to replace in production
       */
      const response = await axios.put(
        `http://localhost:3000/api/employees/${id}`,
        data
      )
      console.log(response)
      if (response.status == 201) {
        router.push('/')
        //TODO: Triggle a success notification
      }
    } catch (error) {
      //TODO: Triggle a fail notification
      return <p>Error when updating employee profile </p>
    }
  }

  const createEmployee = async (data) => {
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
      /**TODO:
       * Absolute route is used here, need to replace in production
       */
      const response = await axios.post(
        'http://localhost:3000/api/employees/',
        data
      )
      if (response.status == 201) {
        router.push('/')
        //TODO: Triggle a success notification
      }
    } catch (error) {
      //TODO: Triggle a fail notification
      return <p>Error when creating new employee profile </p>
    }
  }

  const onSubmit = async (data) => {
    if (preloaded != {}) return updateEmployee(data)
    else return createEmployee(data)
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
              {...register('pictureUrl', {
                required: preloaded ? false : true,
              })}
            ></input>
            <input
              type="text"
              className="outline-none"
              placeholder="Location"
              {...register('location', { required: true })}
            />
            {!isNew ? (
              <img
                className="h-10 w-10 rounded-full"
                src={preloaded.pictureUrl}
                alt="employee thumbnail"
              />
            ) : (
              console.log(register.pictureUrl)
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
