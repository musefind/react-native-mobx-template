import {observable} from 'mobx'
import config from '../config'
import UIStore from './UIStore'
import FetchResource from '../Resources/FetchResource'

// This is an example store for holding data loaded from an external API
class DataStore {
  @observable dataObject = {}
  @observable dataList = []
  // Use the following boolean to display a loading indicator in the UI before data is present
  @observable listLoaded = false

  loadData() {
    FetchResource.get(config.EXAMPLE_API + '/data')
      .then((data) => {
        this.dataList = data.list
        this.listLoaded = true
      }).catch((err) => {
        UIStore.addFlash(err, true, false)
      })
  }

  modifyObject() {
    // Here we assume dataObject has been modified, and needs to be sent to the API
    FetchResource.put(config.EXAMPLE_API + '/object', dataObject)
      .catch((err) => {
        UIStore.addFlash(err, true, false)
      })
  }
}

const store = new DataStore()
export default store