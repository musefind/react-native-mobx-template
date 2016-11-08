import {observable} from 'mobx'
import {
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
}

const store = new UIStore()
export default store