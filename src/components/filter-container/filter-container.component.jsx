const Filter = ({ filter, ...otherProps }) => {
  return (
    <div key={filter} className="filter-container flex items-center justify-between gap-x-3 py-1  border-b-2 border-gray-600">
      <label className='capitalize font-light font-body text-sm' htmlFor={filter}>{filter}</label>
      <input id={filter} className='checkbox checkbox-sm' type='checkbox' name={filter} {...otherProps} />
    </div>
  )
}

export default Filter;