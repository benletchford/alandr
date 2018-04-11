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
import AddIcon from '@material-ui/icons/Add';
import Slide from 'material-ui/transitions/Slide';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Input from 'material-ui/Input';

import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  itemActionButtonCell: {
    textAlign: 'center'
  },
  itemActionButton: {
    width: '20px'
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ItemEditor extends Component {
  handleClose = () => {
    store.app.editorDialogOpen = false
  }

  handleAdd = () => {
    store.data.items.push({href: '', name: ''})
  }

  render() {
    const { classes } = this.props;

    var items = []
    for(var i=0;i<store.data.items.length;i++) {
      items.push(<ItemEditorRow key={i} index={i} classes={classes}/>)
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
                Edit
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
                  <TableCell padding="none"></TableCell>

                  <TableCell>Name</TableCell>
                  <TableCell>Source</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items}
                <TableRow>
                  <TableCell padding="none" className={classes.itemActionButtonCell}>
                    <IconButton aria-label="Add" onClick={this.handleAdd}>
                       <AddIcon />
                     </IconButton>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Dialog>
      </div>
    )
  }
}

class ItemEditorRow extends Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleDelete = () => {
    store.data.items.splice(this.props.index, 1)
    this.handleClose()
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <TableRow>
        <TableCell padding="none" className={this.props.classes.itemActionButtonCell}>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Disable</MenuItem>
            <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
          </Menu>
        </TableCell>

        <TableCell>
          <Input
            defaultValue={store.data.items[this.props.index].name}
            fullWidth
            className={this.props.classes.input}
          />
        </TableCell>
        <TableCell>
          <Input
            defaultValue={store.data.items[this.props.index].href}
            fullWidth
            className={this.props.classes.input}
          />
        </TableCell>
      </TableRow>
    )
  }
}

export default withStyles(styles)(view(ItemEditor));
