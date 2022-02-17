export default function EditAnimation() {
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
        <div className="mt-5 animate-pulse md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <p className="text-sm font-medium text-gray-700">
                    First name
                  </p>

                  <div className="mt-1 h-10 w-full rounded-md bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    Last name
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    Title
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    Department
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <p className="block text-sm font-medium text-gray-700">
                    Email
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <p className="block text-sm font-medium text-gray-700">
                    Location (City)
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>
                <div className="col-span-6 text-left sm:col-span-4">
                  <p className="block text-left text-sm font-medium text-gray-700">
                    Cover Photo
                  </p>
                  <div className="mt-1 block h-10 w-full rounded-md border bg-slate-400 px-2 py-2 shadow-sm"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
