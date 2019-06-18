import React, { Component } from 'react';

class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header
    }
  }

  onChange = (e) => {
    // console.log(e.target.value)
    this.setState({ header: e.target.value })
    this.props.changePHeader(e.target.value)
  }

  render() {
    return(
      <form className='white-card'>
        <h2>Change Header Content</h2>
        <input type='text' placeholder='Change Header' value={this.state.header} onChange={this.onChange}/>
      </form>
    )
  }
}

export default HeaderForm;