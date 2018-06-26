/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Auth from './Screens/Auth/';
import deviceStorage from './Services/deviceStorage';
import { Loading } from './Components/common/Loading'
import LoggedIn from './Screens/LoggedIn';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = ({
      jwt: '',
      loading: true
    });
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }



  render() {

    if (this.state.loading) {
      return (
        <Loading size={'large'} />
      );
    } else if (!this.state.jwt) {
      return (
        <Auth newJWT={this.newJWT} />
      );
    } else if (this.state.jwt){
      return(
        <LoggedIn jwt={this.state.jwt} deleteJWT={this.deleteJWT}/>
      );
    }
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
