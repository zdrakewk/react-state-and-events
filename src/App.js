import React, { Component } from 'react';
import './App.css';

import HeaderForm from './components/headerForm';
import Search from './components/search';
import Item from './components/item';
import items from './data/items';

class App extends Component {
  constructor(){
    super();
    this.state = {
      header: 'Welcome learning about React Events'
    }
  }

  changeHeader = (txt) => {
    this.setState({header: txt})
  }

  render () {
    let itemList = items.map(item => <Item name={item.name} />)
    return (
      <div className='bkgd-color'>
      
        <header>
          <h1>{this.state.header}</h1>
          <hr />
        </header>
        <HeaderForm header={this.state.header} changePHeader={this.changeHeader}/>
        <div className='white-card'>
        <Search />
        <ul>
          {itemList}
        </ul>

        </div>
      </div>
    );
  }
}

export default App;
