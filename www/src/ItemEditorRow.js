import React, { Component } from 'react';
import { view } from 'react-easy-state'

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import { TableCell, TableRow } from 'material-ui/Table';

import Input from 'material-ui/Input';

import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
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

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <TableRow>
        <TableCell padding="none" className={classes.itemActionButtonCell}>
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
            <MenuItem onClick={() => {
                this.props.handleDelete(this.props.i)
                this.handleClose()
              }
            }>Delete</MenuItem>
          </Menu>
        </TableCell>

        <TableCell>
          <Input
            defaultValue={this.props.item.name}
            fullWidth
            className={classes.input}
          />
        </TableCell>
        <TableCell>
          <Input
            defaultValue={this.props.item.href}
            fullWidth
            className={classes.input}
          />
        </TableCell>
      </TableRow>
    )
  }
}

export default withStyles(styles)(view(ItemEditorRow));
