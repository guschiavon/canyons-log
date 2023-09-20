const Filter = ({ filter, ...otherProps }) => {
  return (
    <div key={filter} className="filter-container flex items-center justify-between gap-x-3">
      <label className='capitalize font-light text-base' htmlFor={filter}>{filter}</label>
      <input id={filter} className='checkbox checkbox-sm' type='checkbox' name={filter} {...otherProps} />
    </div>
  )
}

export default Filter;