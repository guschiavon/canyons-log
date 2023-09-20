

const SearchBox = ({ onChange, placeholder }) => {    
  
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input w-full max-w-xs"
      onChange={onChange} />    
  )

}

export default SearchBox