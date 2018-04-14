import React, { Component } from 'react';
import './App.css';
import { view } from 'react-easy-state'

import Menu from './Menu';
import SimpleList from './SimpleList';
import ItemEditor from './ItemEditor'
import SettingsEditor from './SettingsEditor'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleList />
        <Menu />

        <ItemEditor />
        <SettingsEditor />
        <About />
      </div>
    );
  }
}

export default view(App);
