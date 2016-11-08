import {observable} from 'mobx'
import {
  NetInfo,
  LayoutAnimation,
} from 'react-native';

class UIStore {
  @observable flash = {
    message: '',
    isError: false
  }
  @observable showFlash = false

  displayFlash(message, isError, timeout) {
    LayoutAnimation.easeInEaseOut()
    this.flash = {
      message: message,
      isError: isError
    }
    this.showFlash = true
    if (timeout) {
      setTimeout(() => {
        this.dismissFlash()
      }, timeout)
    }
  }

  dismissFlash() {
    LayoutAnimation.easeInEaseOut()
    this.flash = { message: '' }
    this.showFlash = false
  }

  handleConnectivityChange(isConnected) {
    console.log('Connected:', isConnected)
    if (!isConnected) {
      this.displayFlash('No internet connection', true, false)
    } else {
      this.dismissFlash()
    }
  }

  checkConnectivity() {
    return NetInfo.isConnected.fetch()
  }
}

const store = new UIStore()
export default store