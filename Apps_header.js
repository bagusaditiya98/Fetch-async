import React from 'react';
import{StyleSheet, AppRegistry, View } from 'react-native';
//import MenghitungVolumeBalok from './src/comp/MenghitungVolumeBalok';
import Header from './src/Comp/Header';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.containerMain}>
      <Header/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    containerMain:{
      flex:1,
    }
})
AppRegistry.registerComponent('latihan1', () => App);
