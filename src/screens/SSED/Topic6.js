import React from 'react';
import {View, Text, Image} from 'react-native';
import lakeImage from '../assets/images/lake.jpg';

const Topic6 = () => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80',
        }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          backgroundColor: 'black',
        }}
      />
      <Text
        style={{
          fontFamily: 'Helvetica',
          fontSize: 100,
          color: 'white',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 370,
          textAlign: 'center',
        }}>
        Hello
      </Text>
    </View>
  );
};

export default Topic6;
