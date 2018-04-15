import React, { Component } from 'react';
import { view } from 'react-easy-state'

import store from './Store'

class SimpleList extends Component {
  render() {
    const styles = {
      ul: {
        listStyleType: 'none',
        padding: '0',
        margin: '0'
      }
    }

    var items = [];
    for (var i=0;i<store.data.items.length;i++) {
        items.push(
          <li key={i + store.data.settings['link-mode']}>
            <SimpleListItem href={store.data.items[i].href} name={store.data.items[i].name}/>
          </li>
        );
    }

    return (
      <div>
        <ul style={styles.ul}>{items}</ul>
      </div>
    )
  }
}

class SimpleListItem extends Component {
  render() {

    return (
      <a href={this.props.href} target={store.data.settings['link-mode'] === 'tab' ? '_blank' : null}>{this.props.name}</a>
    )
  }
}

export default view(SimpleList);
