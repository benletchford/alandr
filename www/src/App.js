import React, { Component } from 'react';
import './App.css';
import { view } from 'react-easy-state'

import Menu from './Menu';
import SimpleList from './SimpleList';
import alandrStore from './Store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleList items={alandrStore.items}/>
        <Menu />
      </div>
    );
  }
}

export default view(App);
