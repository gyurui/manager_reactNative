import React, {Component} from 'react';
import {  View, Text } from 'react-native';
import Ball from './components/Ball'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'; 
import firebase from 'firebase'

import  { composeWithDevTools  } from 'remote-redux-devtools';
import LoginForm from './components/LoginForm';
import Router  from './Router';

import Deck from './components/Deck'
import { Header } from './components/common'
import { Card, Button } from 'react-native-elements'

const middleware = [
  ReduxThunk,
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

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

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
      <Text style={{ marginBottom: 10 }}>
        I can customize the Card further.
      </Text>
      <Button
        icon={{ name: 'code'}}
        backgroundColor='#03A9F4'
        title="View Now!"
      >
      </Button>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
                <Text style={{ marginBottom: 10 }}>
          Theres no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    )
  }

  render() {
    return (
      <Provider store={store} >
      <View >
        <Header headerText="Swipe"></Header>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
      </Provider>
      );
  }
}

