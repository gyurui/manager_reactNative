import React, {Component} from 'react';
import {  View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {Header} from './components/common'

import  LoginForm  from './components/LoginForm'
import reducers from './reducers'; 
import firebase from 'firebase'

import  { composeWithDevTools } from 'remote-redux-devtools';

const middleware = [
  ReduxThunk,
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

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
      <Provider store={store} >
      <View>
        <Header headerText="Manager"></Header>
        <LoginForm></LoginForm>
      </View>
      </Provider>
      );
  }
}

