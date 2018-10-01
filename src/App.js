/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { LoginForm } from './components/LoginForm'
import reducers from './reducers'; 
import firebase from 'firebase'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBoq9NrqOTzQIuyn8wahv5QIy1pMRObku0",
      authDomain: "manager-26f9b.firebaseapp.com",
      databaseURL: "https://manager-26f9b.firebaseio.com",
      projectId: "manager-26f9b",
      storageBucket: "manager-26f9b.appspot.com",
      messagingSenderId: "701160260030"
    };

    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <LoginForm></LoginForm>
      </Provider>
    );
  }
}

