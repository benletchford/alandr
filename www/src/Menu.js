import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'

import Button from 'material-ui/Button';
import Zoom from 'material-ui/transitions/Zoom';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

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

    const miniFabs = [
      {
        toolTipTitle: 'Settings',
        icon: 'settings'
      },
      {
        toolTipTitle: 'Edit',
        icon: 'edit',
        onClick: () => store.app.editorDialogOpen = true
      },
      // {
      //   toolTipTitle: 'Health Check',
      //   icon: 'done'
      // },
      {
        toolTipTitle: 'About',
        icon: 'help'
      }
    ]

    const miniFabButtons = []
    for(var i=0;i<miniFabs.length;i++) {
      miniFabButtons.push(
        <Tooltip title={miniFabs[i].toolTipTitle} placement="left">
          <Zoom in={this.state.in}>
            <Button mini style={Object.assign({}, style.fabButtonMini, {bottom: 86 + (52 * i) + 'px'})} onClick={miniFabs[i].onClick} variant="fab" color="primary" aria-label={miniFabs[i].toolTipTitle}><Icon>{miniFabs[i].icon}</Icon></Button>
          </Zoom>
        </Tooltip>
      )
    }

    return (
      <div className="fab-menu">
        <Button style={style.fabButton} onClick={this.toggleExited.bind(this)} variant="fab" color="primary" aria-label="add"><Icon>add</Icon></Button>
        {miniFabButtons}
      </div>
    )
  }
}

export default view(Menu);
