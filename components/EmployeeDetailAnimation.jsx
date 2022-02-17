export default function EmployeeDetailAnimation() {
  return (
    <div className="w-11/12 max-w-5xl flex-1 flex-col py-4 px-2 text-center">
      <div className="mt-4 min-h-screen text-left sm:mt-0">
        <div className="animate-pulse md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="flex justify-center px-4 sm:px-2">
              <div className="h-50 w-50 ml-2 bg-slate-500"></div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <h3 className=" block text-sm font-medium text-gray-700">
                      First name
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Last name
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Title
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Department
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Email
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <h3 className="block text-sm font-medium text-gray-700">
                      Location (City)
                    </h3>
                    <div className="mt-1 block h-10 w-full rounded-md border border-dashed border-gray-300 bg-slate-500 px-2 py-2 shadow-sm "></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                <div className="inline-flex h-10 w-16 justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 font-medium shadow-sm "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
