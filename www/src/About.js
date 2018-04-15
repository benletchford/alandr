import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

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

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClose = () => {
    store.app.aboutDialogOpen = false
  }

  render() {
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
              <br />
              <br />
              Version: {store.data.version}
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
