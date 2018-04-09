import React, { Component } from 'react';
import {
  Dialog,
  DefaultDialogTemplate,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from 'rmwc/Dialog';
import { Button } from 'rmwc/Button';

class ItemEditor extends Component {
  render() {
    return (
      <Dialog
        open={true}
        onClose={evt => this.setState({standardDialogOpen: false})}
      >
        <DialogSurface>
          <DialogHeader>
            <DialogHeaderTitle>Dialog Title</DialogHeaderTitle>
          </DialogHeader>
          <DialogBody>This is a standard dialog.</DialogBody>
          <DialogFooter>
              <DialogFooterButton cancel>Cancel</DialogFooterButton>
              <DialogFooterButton accept>Sweet!</DialogFooterButton>
          </DialogFooter>
        </DialogSurface>
        <DialogBackdrop />
      </Dialog>
    )
  }
}

export default ItemEditor;
