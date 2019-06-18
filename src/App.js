import React, { Component } from 'react';
import './App.css';

import HeaderForm from './components/headerForm';
import Search from './components/search';
import Item from './components/item';
import items from './data/items';

class App extends Component {

  render () {
    let itemList = items.map(item => <Item name={item.name} />)
    return (
      <div>
        <header>
          <h1>Weclome to React State & Events</h1>
          <hr />
        </header>
        <HeaderForm />
        <Search />
        <ul>
          {itemList}
        </ul>
      </div>
    );
  }
}

export default App;
