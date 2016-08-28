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
			<View style={styles.container}>
				<View style={styles.vista1}></View>
				<View style={styles.vista2}></View>
				<View style={styles.vista3}></View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor : 'black',
		flex : 1,
	},
	vista1 : {
		backgroundColor : 'green',
		flex : 1,
	},
	vista2 : {
		backgroundColor : 'blue',
		flex : 2,
	},
	vista3 : {
		backgroundColor : 'pink',
		flex : 3 ,
	}
});


AppRegistry.registerComponent('atributosUI', () => atributosUI);