import { useState } from 'react'

const filterOptions = ['All', 'Name', 'Title', 'Department']

export default function SelectFilter() {
  const [open, setOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')
  return (
    <select>
      <label>Filter</label>
      <div>
        <button type="button">
          <span>{selectedFilter}</span>
        </button>
        {filterOptions.map((filterValue) => (
          <option
            value={filterValue}
            onClick={() => setSelectedFilter(() => filterValue)}
          >
            {filterValue}
          </option>
        ))}
      </div>
    </select>
  )
}
