export default function () {
  return (
    <div className="flex w-1/2 items-center rounded-xl border-2 border-slate-200 bg-gray-100 p-2  text-center focus-within:ring-2 focus-within:ring-blue-400 hover:ring-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-slate-400"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        placeholder="Search"
        type="text"
        className="ml-2 w-full bg-gray-100 focus:outline-none"
      />
    </div>
  )
}
