import React, { Component } from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../Components';

export default class Auth extends Component{
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };
    this.whichForm = this.whichForm.bind(this);
    this.authSwitch = this.authSwitch.bind(this);

  }

  render(){
    return(
      <View style={styles.container}>
        {this.whichForm()}
      </View>
    );
  };

  whichForm(){
    if(!this.state.showLogin){
      return(
        <Registration newJWT={this.props.newJWT} authSwitch={this.authSwitch}/>
      );
    } else {
      return(
        <Login newJWT={this.props.newJWT} authSwitch={this.authSwitch}/>
      );
    }
  };


  authSwitch(){
    console.log("Se llamo");
    this.setState({showLogin: !this.state.showLogin})
  }

};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
};