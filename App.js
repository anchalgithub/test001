import * as React from 'react';
import { StyleSheet, Text, View, Image, Header } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteScreen from './WriteScreen';
import ReadScreen from './ReadScreen';


export default class App extends React.Component{
render(){
return(

  <AppContainer style = {{backgroundColor:'blue'}}/>

)
}
}

const TabNavigator = createBottomTabNavigator({
 WriteStory: {screen: WriteScreen},
  ReadStory: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
     
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);


const AppContainer = createAppContainer(TabNavigator);
