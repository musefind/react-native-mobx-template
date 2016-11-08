import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import CookieManager from 'react-native-cookies'
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'

import DashboardView from './DashboardView'

@observer
export default class LoginView extends Component {
  @observable username = ''
  @observable password = ''

  goToDashboard() {
    this.props.navigator.push({
      title: 'Dashboard',
      component: DashboardView
    })
  }

  handleSubmitLogin() {
    this.props.userStore.login(this.username, this.password)
      .then(() => {
        this.goToDashboard()
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Username"
          autoCapitalize="none" 
          value={this.username} 
          onChangeText={(text) => { this.username = text }}/>
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          value={this.password} 
          secureTextEntry={true}
          onChangeText={(text) => { this.password = text }}/>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmitLogin.bind(this)}>
          <Text>Submit</Text>
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
  input: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'white', 
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  }
});
