import React, {
	Component
} from 'react';


import {
	AppRegistry,
	StyleSheet,
	View
} from 'react-native';


class atributosUI extends Component{
	render(){
		return(
			<View style={styles.container}></View>
		);
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor : 'white',
		flex : 1,
	}
});


AppRegistry.registerComponent('atributosUI', () => atributosUI);