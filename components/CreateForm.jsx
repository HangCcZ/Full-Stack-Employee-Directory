import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { mutate } from 'swr'
import Link from 'next/link'
import axios from 'axios'
import { HOST } from '../config'

export default function CreateForm({ preloaded, isNew }) {
  const router = useRouter()
  const [imageSrc, setImageSrc] = useState(null)
  const [isNewPicture, setIsNewPicture] = useState(false)
  const [requestLoading, setRequestLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: preloaded ? preloaded : {},
  })

  /**
   * Update cover image preview after a new image is selected
   * @param {file change event} event
   */
  const handleOnChange = (event) => {
    setImageSrc(() => URL.createObjectURL(event.target.files[0]))
    setIsNewPicture(() => true)
  }

  /**
   * Handling updating existing employee
   * @param {updated employee data} formFields
   * @returns
   */
  const updateEmployee = async (formFields) => {
    const { id } = router.query
    // data.pictureUrl will be type of object (FileList) if image is updated
    setRequestLoading(() => true)
    if (typeof formFields.pictureUrl != 'string') {
      try {
        const formData = new FormData()
        for (const file of formFields.pictureUrl) {
          formData.append('file', file)
        }
        formData.append('upload_preset', 'postlight-uploads')
        const cloudinaryData = await axios.post(
          'https://api.cloudinary.com/v1_1/doyzkjrey/image/upload',
          formData
        )
        formFields.pictureUrl = cloudinaryData.data.url
      } catch (error) {
        //TODO: Triggle a fail notification
        setRequestLoading(() => false)
        return <p>Error when uploading image </p>
      }
    }
    try {
      /**TODO:
       * Absolute route is used here, need to replace in production
       */
      const response = await axios.put(
        `${HOST}/api/employees/${id}`,
        formFields
      )
      const { data } = response
      mutate(`${HOST}/api/employees/${id}`, data.updateEmployee, false)
      setRequestLoading(() => false)

      if (response.status == 201) {
        router.push(`${HOST}`)
        //TODO: Triggle a success notification
      }
    } catch (error) {
      //TODO: Triggle a fail notification
      return <p>Error when updating employee profile </p>
    }
  }

  /**
   * Handling creating new employee
   * @param {new employee data} data
   * @returns
   */
  const createEmployee = async (formFields) => {
    setRequestLoading(true)
    const formData = new FormData()
    for (const file of formFields.pictureUrl) {
      formData.append('file', file)
    }
    formData.append('upload_preset', 'postlight-uploads')

    let cloudinaryData = null
    try {
      cloudinaryData = await axios.post(
        'https://api.cloudinary.com/v1_1/doyzkjrey/image/upload',
        formData
      )
      formFields.pictureUrl = cloudinaryData.data.url
    } catch (error) {
      //TODO: Triggle a fail notification
      setRequestLoading(() => false)
      return <p>Error when uploading image </p>
    }

    try {
      /**TODO:
       * Absolute route is used here, need to replace in production
       */
      const response = await axios.post(`${HOST}/api/employees/`, formFields)
      setRequestLoading(() => false)
      if (response.status == 201) {
        router.push(`${HOST}`)
        //TODO: Triggle a success notification
      }
    } catch (error) {
      //TODO: Triggle a fail notification
      setRequestLoading(() => false)
      return <p>Error when creating new employee profile </p>
    }
  }

  /**
   * Trigger http request based on form's purpose
   * @param {formFields}
   * @returns
   */
  const onSubmit = async (formFields) => {
    if (!isNew) return updateEmployee(formFields)
    else return createEmployee(formFields)
  }

  return (
    <div className="mt-4 min-h-screen text-left sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Employee Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Create a new profile for your collegue
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className=" block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      type="text"
                      name="firstName"
                      {...register('firstName', {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      type="text"
                      name="lastName"
                      {...register('lastName', {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      {...register('title', { required: true })}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      {...register('department', { required: true })}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location (City)
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('location', { required: true })}
                    />
                  </div>
                  <div className="col-span-6 text-left sm:col-span-4">
                    <label
                      htmlFor="file"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Cover Photo
                    </label>
                    <input
                      type="file"
                      className="mt-1 cursor-pointer rounded-md border border-gray-300 bg-white px-2 py-2  shadow-sm outline-none focus:border-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('pictureUrl', {
                        required: isNew ? true : false,
                      })}
                      onChange={handleOnChange}
                    />

                    {!isNew && !isNewPicture ? (
                      <img
                        className="ml-2 inline h-10 w-10 rounded-full"
                        src={preloaded.pictureUrl}
                        alt="employee thumbnail"
                      />
                    ) : (
                      isNewPicture && (
                        <img
                          className="ml-2 inline h-10 w-10 rounded-full"
                          src={imageSrc}
                          alt="employee thumbnail"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Link href={`${HOST}`}>
                  <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className={`ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  disabled={requestLoading ? true : false}
                >
                  {isNew ? 'Create' : 'Save'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
