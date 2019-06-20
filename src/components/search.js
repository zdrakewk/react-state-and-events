import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    // way to verify if you have access to this
    // console.log(this)
    
    // const query = this.state.query
    const { query } = this.state
    const lowQuery = query.toLowerCase()

    const filteredArr = this.props.orgItems.filter(item => {
      return item.name.toLowerCase().includes(lowQuery)
    })
     
    this.props.changePFilterInfo(filteredArr)
  }

  render() {
    console.log(this.state.query)
    return(
      <form >
        <h2>Search Form</h2>
        <input type='text' placeholder='Search' value={this.state.query} onChange={this.handleChange}/>
        <input type='submit' value='Search' onClick={this.handleClick}/>
      </form>
    )
  }
}

export default Search;