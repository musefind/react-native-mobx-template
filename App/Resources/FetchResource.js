import CookieManager from 'react-native-cookies'
import UIStore from '../Stores/UIStore'

// This resource acts as a wrapper around the Fetch API
// It takes care of setting headers properly before each request, getting the token from the cookie
// It only sends request if there is currently an internet connection
export default class FetchResource { 
  static get(url) {
    return new Promise((resolve, reject) => {
      UIStore.checkConnectivity().then((connected) => { 
        if (connected) {
          this.getHeaders().then((headers) => {
            fetch(url, {
              headers: headers
            }).then((response) => {
              response.json().then((data) => {
                resolve(data)
              })
            }).catch((err) => {
              reject(err)
            })
          })
        } else {
          reject('No internet connection.')
        }
      })
    })
  }

  static put(url, body) {
    return new Promise((resolve, reject) => {
      UIStore.checkConnectivity().then((connected) => { 
        if (connected) {
          this.getHeaders().then((headers) => {
            fetch(url, {
              headers: headers,
              body: JSON.stringify(body),
              method: 'PUT'
            }).then((response) => {
              response.json().then((data) => {
                resolve(data)
              })
            }).catch((err) => {
              reject(err)
            })
          })
        } else {
          reject('No internet connection.')
        }
      })
    })
  }

  static getHeaders() {
    return new Promise((resolve, reject) => {
      CookieManager.get('http://musefind.com', (err,res) => {
        let headers = new Headers({
          'Authorization': 'Bearer ' + res.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
        resolve(headers)
      })
    })
  }
}
