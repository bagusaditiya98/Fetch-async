import React from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>REGGAE</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.text}>RASTA</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex:1,
      flexDirection:'column'
    },
    box1:{
      flex: 1,
      backgroundColor: 'green',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box2:{
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box3: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  }
});
