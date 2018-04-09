import React, { Component } from 'react';
import './SimpleList.css';

class SimpleList extends Component {
  render() {
    var items = [];
    for (var i=0;i<this.props.items.length;i++) {
        items.push(
          <li key={i}><SimpleListItem href={this.props.items[i].href} name={this.props.items[i].name} /></li>
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

export default SimpleList;
