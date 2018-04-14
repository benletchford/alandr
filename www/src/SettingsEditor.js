import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'
import ItemEditorRow from './ItemEditorRow'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Slide from 'material-ui/transitions/Slide';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  dialogContent: {
    width: '100%',
    overflowX: 'auto'
  },
  itemActionButtonCell: {
    textAlign: 'center'
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SettingsEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  handleClose = () => {
    store.app.settingsDialogOpen = false
  }

  // handleSave = () => {
  //   // Remove all properties except for the ones we care about.
  //   var newItems = []
  //   this.state.items.forEach((item) => {
  //     newItems.push({
  //       name: item.name,
  //       href: item.href
  //     })
  //   })
  //
  //   fetch('http://localhost:8080/api/data/items', {
  //     mode: 'no-cors',
  //     method: 'POST',
  //     headers: {'Content-Type':'application/javascript'},
  //     body: JSON.stringify({
  //       items: newItems
  //     })
  //   }).then(() => {
  //     store.data.items = newItems.slice()
  //   })
  //   this.handleClose()
  // }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          fullScreen
          open={store.app.settingsDialogOpen}
          onClose={this.handleClose}
          onEnter={this.handleOnEnter}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Settings
              </Typography>
              <Button color="inherit" onClick={this.handleSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
            <div className={classes.dialogContent}>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(view(SettingsEditor));