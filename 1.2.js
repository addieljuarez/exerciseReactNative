/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';



import {
	AppRegistry,
  	View,
  	StyleSheet
} from 'react-native';




class holaMundo extends Component {
  render() {
	return (
	  	<View style={style.container}>
			<View style={style.viewCenter}></View>
	  	</View>
	);
  }
}


const style = StyleSheet.create({
	container : {
		backgroundColor:'blue', 
		flex:1, 
		justifyContent:'center', 
		alignItems:'center',
	},
	viewCenter : {
		backgroundColor:'red', 
		height:100, 
		width:100,
	}
});




AppRegistry.registerComponent('holaMundo', () => holaMundo);
