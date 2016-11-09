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
  TouchableHighlight,
  TabBarIOS
} from 'react-native';
import LoginView from './LoginView'
import UserStore from '../Stores/UserStore'
import CookieManager from 'react-native-cookies'
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'

@observer
export default class DashboardView extends Component {
  @observable selectedTab = 0
  // The below should belong in a relevant store, but kept here for ease of example
  @observable notifications = 0

  handleLogout() {
    UserStore.logout()
    this.props.navigator.push({
      title: 'Login',
      component: LoginView
    })
  }

  render() {
    return (
        <TabBarIOS
          style={styles.container}
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            style={styles.tab}
            systemIcon="contacts"
            selected={this.selectedTab === 0}
            onPress={() => {
              this.selectedTab = 0
            }}>
            <View>
              <Text>Tab 1</Text>
              <TouchableHighlight style={styles.button} onPress={this.handleLogout.bind(this)}>
                <Text>Logout</Text>
              </TouchableHighlight>
              </View>
            </TabBarIOS.Item>
          <TabBarIOS.Item
            style={styles.tab}
            systemIcon="history"
            badge={this.notifications > 0 ? this.notifications : undefined}
            selected={this.selectedTab === 1}
            onPress={() => {
              this.selectedTab = 1
            }}>
            <View>
              <Text>Tab 2</Text>
              <TouchableHighlight style={styles.button} onPress={this.handleLogout.bind(this)}>
                <Text>Logout</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={() => { this.notifications++ }}>
                <Text>Add Notification</Text>
              </TouchableHighlight>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            style={styles.tab}
            systemIcon="favorites"
            title="More"
            selected={this.selectedTab === 2}
            onPress={() => {
              this.selectedTab = 2
            }}>
            <View>
              <Text>Tab 3</Text>
              <TouchableHighlight style={styles.button} onPress={this.handleLogout.bind(this)}>
                <Text>Logout</Text>
              </TouchableHighlight>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white', 
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  }
});
