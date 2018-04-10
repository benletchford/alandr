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
import { view } from 'react-easy-state'

import store from './Store'

class ItemEditor extends Component {
  render() {
    return (
      <Dialog
        open={store.app.editorDialogOpen}
        onClose={() => store.app.editorDialogOpen = false}
      >
        <DialogSurface>
          <DialogHeader>
            <DialogHeaderTitle>Link Editor</DialogHeaderTitle>
          </DialogHeader>
          <DialogBody>This is a standard dialog.</DialogBody>
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
