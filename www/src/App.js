import React, { Component } from 'react';
import './App.css';
import { view } from 'react-easy-state'

import Menu from './Menu';
import SimpleList from './SimpleList';
import ItemEditor from './ItemEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleList />
        <Menu />

      </div>
    );
  }
}
// <ItemEditor />

export default view(App);
