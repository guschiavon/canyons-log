const FormInput = ({name, label, onChangeHandler, ...otherProps}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text capitalize">{label}</span>            
      </label>
      <input name={name}
        className="input input-bordered w-full"
        onChange={onChangeHandler}
        {...otherProps} />
    </div>
  )
}
export default FormInput;