import { store } from 'react-easy-state'

const dataStore = store({
  data: window.alandrData.alandr,
  app: {
    editorDialogOpen: false
  }
})

export default dataStore
