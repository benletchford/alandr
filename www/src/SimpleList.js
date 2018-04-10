import React, { Component } from 'react';
import { view } from 'react-easy-state'
import './SimpleList.css';

import store from './Store'

class SimpleList extends Component {
  render() {
    var items = [];
    for (var i=0;i<store.data.items.length;i++) {
        items.push(
          <li key={i}><SimpleListItem href={store.data.items[i].href} name={store.data.items[i].name} /></li>
        );
    }

    return (
      <div className="simple-list">
        <ul>{items}</ul>
      </div>
    )
  }
}

class SimpleListItem extends Component {
  render() {

    return (
      <a href={this.props.href}>{this.props.name}</a>
    )
  }
}

export default view(SimpleList);
