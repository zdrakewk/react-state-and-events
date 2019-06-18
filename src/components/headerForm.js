import React, { Component } from 'react';

class HeaderForm extends Component {
  render() {
    return(
      <form className='white-card'>
        <h2>Change Header Content</h2>
        <input type='text' placeholder='Change Header' />
      </form>
    )
  }
}

export default HeaderForm;