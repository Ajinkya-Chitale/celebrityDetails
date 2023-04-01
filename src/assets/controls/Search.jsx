import React, { useState } from 'react'

const Search = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    props.getSearchText(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <div className='searchBox my-5'>
        <form className="d-flex mx-auto" onSubmit={handleSearch}>
            <div className="input-group">
                <input className="form-control rounded-0" type="search" placeholder="Type Celebrity Name" aria-label="Search" value={inputValue} onChange={handleChange} />
                <button className="btn btn-primary rounded-0" type="submit" disabled={inputValue === "" ? props.disabled : false}>Search</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Search;
