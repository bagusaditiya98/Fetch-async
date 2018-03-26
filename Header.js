import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const{ textStyle, backHeader} = styles;
  return(
    <View style = {backHeader}>
        <Text style={textStyle}>ini Header</Text>
    </View>
  );
};
const styles = {
      backHeader:{
        backgroundColor :'black',
        justifyContent: 'center',
        alignItem: 'center',
        height: 60,
        paddingTop: 15,
        marginTop: 5,
        position: 'relative'
      },
      textStyle:{
          fontSize: 25,
          color: '#fff',
          textAlign: 'center'
      }
};
export default Header;
