import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

class ItemEditor extends Component {
  handleClose = () => {
    store.app.editorDialogOpen = false
  };

  render() {
    return (
      <Dialog
        fullScreen
        open={store.app.editorDialogOpen}
        onClose={() => store.app.editorDialogOpen = false}
        transition={(props) => <Slide direction="up" {...props}/>}
      >
        <AppBar style={styles.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={() => store.app.editorDialogOpen = false} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              Settings
            </Typography>
            <Button color="inherit" onClick={this.handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    )
  }
}

export default withStyles(styles)(view(ItemEditor));
