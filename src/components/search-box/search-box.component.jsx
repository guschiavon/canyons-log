import { Component } from "react";

class SearchBox extends Component {  
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
       type='search'
       placeholder={placeholder}
       onChange={onChangeHandler}
       className={className} />
    )
  }
}

export default SearchBox