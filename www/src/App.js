import React, { Component } from 'react';
import { view } from 'react-easy-state'

import Menu from './Menu';
import SimpleList from './SimpleList';
import ItemEditor from './ItemEditor'
import SettingsEditor from './SettingsEditor'
import About from './About'
import NotificationBar from './NotificationBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleList />
        <Menu />

        <ItemEditor />
        <SettingsEditor />
        <About />

        <NotificationBar />
      </div>
    );
  }
}

export default view(App);
