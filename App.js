import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';




class App extends Component{
  componentDidMount () // uygulama ilk açıldığında firebase servisine bağlanarak gerekli yapılandırma(bağlantı) işlemlerini yaptık
  {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: 'AIzaSyD485W413QwNi-XyEqK4P7pF_qj-fkWDCY',
        authDomain: 'studentsregister-3d5d7.firebaseapp.com',
        databaseURL: 'https://studentsregister-3d5d7.firebaseio.com',
        projectId: 'studentsregister-3d5d7',
        storageBucket: 'studentsregister-3d5d7.appspot.com',
        messagingSenderId: '679597312484',
        appId: '1:679597312484:web:a4a448741ea602ff401ff1',
        measurementId: 'G-QCJJVC99C5'
      });
    }

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
      <View style={{ flex:1 }}>
      <Router />
      </View>
      </Provider>
    );
  }
}


export default App;
