import React, { Component } from 'react';
import { view } from 'react-easy-state'
import store from './Store'
import ItemEditorRow from './ItemEditorRow'

import * as uuidv1 from 'uuid/v1'

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

class ItemEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  handleOnEnter = () => {
    var items = store.data.items.slice()
    for(var i=0;i<items.length;i++) {
      items[i].uuid = uuidv1()
    }
    this.setState({
      items: items
    })
  }

  handleClose = () => {
    store.app.editorDialogOpen = false
  }

  handleSave = () => {    
    fetch('http://localhost:8080/api/data/items', {
      mode: 'no-cors',
      method: 'POST',
      headers: {'Content-Type':'application/javascript'},
      body: JSON.stringify({
        items: this.state.items
      })
    })
    this.handleClose()
  }

  handleAdd = () => {
    this.setState({
      items: this.state.items.concat([{href: '', name: '', uuid: uuidv1()}])
    })
  }

  handleDelete = (i) => {
    var items = this.state.items.slice()
    items.splice(i, 1)

    this.setState({
      items: items
    })
  }

  render() {
    const { classes } = this.props;

    let items = []
    for(var i=0;i<this.state.items.length;i++) {
      items.push(<ItemEditorRow key={this.state.items[i].uuid} i={i} item={this.state.items[i]} handleDelete={this.handleDelete} />)
    }

    return (
      <div>
        <Dialog
          fullScreen
          open={store.app.editorDialogOpen}
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
                Edit
              </Typography>
              <Button color="inherit" onClick={this.handleSave}>
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

export default withStyles(styles)(view(ItemEditor));
