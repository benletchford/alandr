import React, { Component } from 'react';
import { Fab } from 'rmwc/Fab';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exited: true
    }
  }

  toggleExited() {
     this.setState({
       exited: !this.state.exited
     })
  }

  render() {
    return (
      <div className="app-fab">
        <Fab exited={false} onClick={this.toggleExited.bind(this)}>add</Fab>
        <Fab mini exited={this.state.exited}>settings</Fab>
        <Fab mini exited={this.state.exited}>edit</Fab>
        <Fab mini exited={this.state.exited}>done</Fab>
        <Fab mini exited={this.state.exited}>help</Fab>
      </div>
    )
  }
}

export default Menu;
