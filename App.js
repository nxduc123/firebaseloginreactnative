import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import MainTabNavigator from './navigation/MainTabNavigator'
import DrawTabNavigator from './navigation/DrawTabNavigator'
import RootNavigation from './navigation/RootNavigation';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';
//cau hinh redux
import {Provider} from 'react-redux';
//add store
import {store} from './redux/app-redux'

export default class App extends React.Component {
  
constructor (props){
  super(props);
  this.state={
    isLoadingComplete: false,
    isAuthenticationReaddy: false,
    isAuthenticated:false
  };
  if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig);}
  firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
}

onAuthStateChanged = (user) => {
  this.setState({isAuthenticationReaddy: true});
  this.setState({isAuthenticated: !!user});
}
  render() {
    if (!this.state.isLoadingComplete && !this.isAuthenticationReaddy && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {(this.state.isAuthenticated) ? <MainTabNavigator /> : <RootNavigation />}
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
       // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
       'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
