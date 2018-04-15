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

import { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';

import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  dialogContent: {
    overflowX: 'auto',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  itemActionButtonCell: {
    textAlign: 'center'
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing.unit
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SettingsEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: Object.assign({}, store.data.settings)
    };
  }

  handleOnEnter = () => {
    this.setState({
      settings: Object.assign({}, store.data.settings)
    })
  }

  handleClose = () => {
    store.app.settingsDialogOpen = false
  }

  handleChange = (e) => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        [e.target.name]: e.target.value
      })
    })
  }

  handleSave = () => {
    fetch('http://localhost:8080/api/data/settings', {
      mode: 'no-cors',
      method: 'POST',
      headers: {'Content-Type':'application/javascript'},
      body: JSON.stringify({
        settings: this.state.settings
      })
    }).then(() => {
      store.data.settings = Object.assign({}, this.state.settings)
    })

    this.handleClose()
  }

  render() {
    const { classes } = this.props;

    const settingsMeta = [
      {
        type: 'text',
        settingKey: 'site-name'
      },
      {
        type: 'select',
        settingKey: 'link-mode',
        options: [
          'link',
          'tab'
        ]
      },
      {
        type: 'select',
        settingKey: 'layout-mode',
        options: [
          'plain'
        ]
      },
      {
        type: 'select',
        settingKey: 'maintenance-mode',
        options: [
          'on',
        ]
      },
    ];

    // Turn settingKeys into display names, ie 'site-name' -> 'Site Name'
    settingsMeta.forEach(el => el.settingDisplayName = el.settingKey.toLowerCase().replace(/-/g, ' ').replace(/(^| )(\w)/g, s => s.toUpperCase()))

    var formElements = []
    for(var i=0;i<settingsMeta.length;i++) {
      var meta = settingsMeta[i]

      if(meta.type === 'text') {
        formElements.push(
          <TextField
            key={i}
            id='with-placeholder'
            name={meta.settingKey}
            onChange={this.handleChange}
            label={meta.settingDisplayName}
            value={this.state.settings[meta.settingKey]}
            fullWidth
            className={classes.textField}
            margin='normal'
          />
        )
      } else if(meta.type === 'select') {
        var options = []
        for(var j=0;j<meta.options.length;j++) {
          options.push(
            <MenuItem key={j} value={meta.options[j]}>{meta.options[j]}</MenuItem>
          )
        }

        formElements.push(
          <FormControl key={i} className={classes.formControl}>
            <InputLabel htmlFor={meta.settingKey}>{meta.settingDisplayName}</InputLabel>
            <Select
              name={meta.settingKey}
              value={this.state.settings[meta.settingKey]}
              onChange={this.handleChange}
              fullWidth
            >
              {options}
            </Select>
          </FormControl>
        )
      }
    }

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
              {formElements}
            </div>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(view(SettingsEditor));
