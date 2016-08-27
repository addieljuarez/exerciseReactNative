/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';



import {
  AppRegistry,
    View
} from 'react-native';




class holaMundo extends Component {
  render() {
  return (
      <View style={{backgroundColor:'blue', flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{backgroundColor:'red', height:100, width:100}}></View>
      </View>
  );
  }
}


AppRegistry.registerComponent('holaMundo', () => holaMundo);
