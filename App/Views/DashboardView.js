/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import LoginView from './LoginView'
import UserStore from '../Stores/UserStore'
import CookieManager from 'react-native-cookies'

export default class DashboardView extends Component {
  handleLogout() {
    UserStore.logout()
    this.props.navigator.push({
      title: 'Login',
      component: LoginView
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.handleLogout.bind(this)}>
          <Text>Logout</Text>
        </TouchableHighlight>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'white', 
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  }
});
