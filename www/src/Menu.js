import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'

import Button from 'material-ui/Button';
import Zoom from 'material-ui/transitions/Zoom';
import Icon from 'material-ui/Icon';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      in: false
    }
  }

  toggleExited() {
     this.setState({
       in: !this.state.in
     })
  }

  render() {
    const style = {
      fabButton: {
        position: 'fixed',
        right: '18px',
        bottom: '18px'
      },
      fabButtonMini: {
        position: 'fixed',
        right: '26px'
      }
    }

    return (
      <div className="fab-menu">
        <Button style={style.fabButton} onClick={this.toggleExited.bind(this)} variant="fab" color="primary" aria-label="add"><Icon>add</Icon></Button>
        <Zoom in={this.state.in}>
          <Button mini style={Object.assign({}, style.fabButtonMini, {bottom: '86px'})} variant="fab" color="primary" aria-label="add"><Icon>settings</Icon></Button>
        </Zoom>
        <Zoom in={this.state.in}>
          <Button mini style={Object.assign({}, style.fabButtonMini, {bottom: '138px'})} onClick={() => store.app.editorDialogOpen = true} variant="fab" color="primary" aria-label="add"><Icon>edit</Icon></Button>
        </Zoom>
        <Zoom in={this.state.in}>
          <Button mini style={Object.assign({}, style.fabButtonMini, {bottom: '190px'})} variant="fab" color="primary" aria-label="add"><Icon>done</Icon></Button>
        </Zoom>
        <Zoom in={this.state.in}>
          <Button mini style={Object.assign({}, style.fabButtonMini, {bottom: '242px'})} variant="fab" color="primary" aria-label="add"><Icon>help</Icon></Button>
        </Zoom>
      </div>
    )
  }
}

export default view(Menu);
