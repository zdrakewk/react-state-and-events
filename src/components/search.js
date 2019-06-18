import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <form >
        <h2>Search Form</h2>
        <input type='text' placeholder='Search' />
        <input type='submit' value='Search'/>
      </form>
    )
  }
}

export default Search;