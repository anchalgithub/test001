import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import Header from './Header'

export default class ReadScreen extends React.Component{
render(){
return(
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Header/>

<Text style = {styles.inText}>Read a Story!📖</Text>
</View>
)
}
}

const styles = StyleSheet.create({
inText:{
fontSize:25,
color: 'blue',
fontWeight: 'bold',
borderWidth:3,
borderRadius:5,
}
})