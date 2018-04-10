import React, { Component } from 'react';
import {
  Dialog,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from 'rmwc/Dialog';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { view } from 'react-easy-state'
import { Grid, GridCell } from 'rmwc/Grid';
import { Icon } from 'rmwc/Icon';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemMeta,
  ListDivider
} from 'rmwc/List';
import { Checkbox } from 'rmwc/Checkbox';

import './ItemEditor.css';
import store from './Store'

class ItemEditor extends Component {
  render() {
    var items = [];
    for (var i=0;i<store.data.items.length;i++) {
        items.push(
          <tr key={i}>
            <td><Checkbox></Checkbox></td>
            <td><TextField fullwidth value={store.data.items[i].href}/></td>
            <td><TextField fullwidth value={store.data.items[i].name}/></td>
          </tr>
        );
    }

    return (
      <Dialog
        open={store.app.editorDialogOpen}
        onClose={() => store.app.editorDialogOpen = false}
        className="item-editor"
      >
        <DialogSurface>
          <DialogHeader>
            <DialogHeaderTitle>Link Editor</DialogHeaderTitle>
          </DialogHeader>
          <DialogBody>
            <table style={{width: 100+'%'}}>
              <thead>
                <tr>
                  <td>Delete</td>
                  <td>Link Source</td>
                  <td>Link Name</td>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </table>
          </DialogBody>
          <DialogFooter>
              <DialogFooterButton cancel>Cancel</DialogFooterButton>
              <DialogFooterButton accept>Save</DialogFooterButton>
          </DialogFooter>
        </DialogSurface>
        <DialogBackdrop />
      </Dialog>
    )
  }
}

export default view(ItemEditor);
