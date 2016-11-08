import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';
import LoginView from './App/Views/LoginView'
import DashboardView from './App/Views/DashboardView'
import UserStore from './App/Stores/UserStore'
import UIStore from './App/Stores/UIStore'

import CookieManager from 'react-native-cookies'
import {observer} from 'mobx-react/native'

const loginRoute = {
  title: 'Login',
  component: LoginView,
  passProps: {
    userStore: UserStore
  }
}

const dashboardRoute = {
  title: 'Dashboard',
  component: DashboardView
}

@observer
export default class ReactNativeMobxTemplate extends Component {
  componentWillMount() {
    UserStore.checkLoginStatus()
  }

  render() {
    let initialRoute = UserStore.isLoggedIn ? dashboardRoute : loginRoute
    if (UserStore.isCookieLoaded) {
      return (
        <View style={styles.container}>
          { 
            UIStore.showFlash && 
              <TouchableHighlight style={styles.flash} onPress={UIStore.dismissFlash.bind(UIStore)}>
                <Text style={[styles.flashText, UIStore.flash.isError ? styles.errorFlash : styles.defaultFlash]}>
                  {UIStore.flash.message}
                </Text> 
              </TouchableHighlight>
          }
          <NavigatorIOS
            ref='nav'
            navigationBarHidden={true}
            style={styles.navigator}
            tintColor='#FF6600'
            initialRoute={initialRoute}/>
        </View>
      );
    } else {
      return <View/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  flash: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 2
  },
  flashText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    padding: 5,
  },
  errorFlash: {
    backgroundColor: 'red',
  },
  defaultFlash: {
    backgroundColor: 'rgba(0,0,0, .5)'
  },
  navigator: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeMobxTemplate', () => ReactNativeMobxTemplate);
