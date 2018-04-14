import { store } from 'react-easy-state'

const dataStore = store({
  data: window.alandrData.alandr,
  app: {
    editorDialogOpen: false,
    settingsDialogOpen: false,
    aboutDialogOpen: false
  }
})

export default dataStore
