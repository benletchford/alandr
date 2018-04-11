import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Input from 'material-ui/Input';

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
  input: {
    margin: theme.spacing.unit,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ItemEditor extends Component {
  handleClose = () => {
    store.app.editorDialogOpen = false
  };

  render() {
    const { classes } = this.props;

    var items = []
    for(var i=0;i<store.data.items.length;i++) {
      items.push(
        <TableRow key={i}>
          <TableCell>
            <Input
              defaultValue={store.data.items[i].name}
              fullWidth
              className={classes.input}
            />
          </TableCell>
          <TableCell>
            <Input
              defaultValue={store.data.items[i].href}
              fullWidth
              className={classes.input}
            />
          </TableCell>
        </TableRow>
      )
    }

    return (
      <div>
        <Dialog
          fullScreen
          open={store.app.editorDialogOpen}
          onClose={this.handleClose}
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
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
            <div className={classes.dialogContent}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Link Name</TableCell>
                  <TableCell>Link Source</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items}
              </TableBody>
            </Table>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(view(ItemEditor));
