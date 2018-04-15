import { store } from 'react-easy-state'

const dataStore = store({
  data: window.alandrData.alandr,
  app: {
    editorDialogOpen: false,
    settingsDialogOpen: false,
    aboutDialogOpen: false,

    notifyOpen: false,
    notifyMessage: ''
  }
})

dataStore.app.notify = (message) => {
  dataStore.app.notifyOpen = true
  dataStore.app.notifyMessage = message

  console.log(dataStore.app.notifyOpen)
}

export default dataStore
