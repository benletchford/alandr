import React, { Component } from 'react';
import './App.css';

import Menu from './Menu';
import SimpleList from './SimpleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleList items={window.alandrData.alandr.items}/>
        <Menu />
      </div>
    );
  }
}

export default App;
