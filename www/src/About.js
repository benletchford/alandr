import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'
import ItemEditorRow from './ItemEditorRow'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
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

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClose = () => {
    store.app.aboutDialogOpen = false
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={store.app.aboutDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">About</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <a href="https://github.com/benletchford/alandr">App</a> by <a href="https://github.com/benletchford">Ben L</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(view(About));
