import {observable} from 'mobx'
import CookieManager from 'react-native-cookies'
import UIStore from './UIStore'

class UserStore {
  @observable isCookieLoaded = false
  @observable isLoggedIn = false

  checkLoginStatus() {
    CookieManager.getAll((err, res) => {
      this.isLoggedIn = Boolean(res.token)
      this.isCookieLoaded = true
    })
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      // Here is where you would want to send the login data to the back end.
      // In the event of a failure, we reject with the error.
      // If success, we set the login cookie.
      // We mimic this effect here by just doing an if else.
      if (username && password) {
        if (username === 'username' && password === 'password') {
          this.setLoginCookie(username)
            .then(() => {
              resolve()
            }).catch((err) => {
              UIStore.displayFlash(err, true, false)
            })
        } else {
          UIStore.displayFlash('Username or password is incorrect.', true, 5000)
        }
      } else {
        UIStore.displayFlash('Please fill out all fields.', true, 5000)
      }
    })
  }

  logout() {
    CookieManager.clearAll((err, res) => {
      console.log('cookies cleared!');
    });
  }

  setLoginCookie(username) {
    return new Promise((resolve, reject) => {
      let date = new Date()
      date.setDate(date.getDate() + 7)
      CookieManager.set({
        name: 'token',
        // Ordinarily, we'd set the value to a token received from the backend. Here, we just use a string.
        value: 'login_token',
        domain: 'musefind.com',
        origin: 'musefind.com',
        path: '/',
        version: '1',
        expiration: date.toJSON()
      }, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
    
  }

}

const store = new UserStore()
export default store
