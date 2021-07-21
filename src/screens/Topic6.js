import React from 'react';
import {View, Text, Image} from 'react-native';
import lakeImage from '../assets/images/lake.jpg';

const Topic6 = () => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        source={lakeImage}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          backgroundColor: 'black',
        }}
      />
      <Text
        style={{
          fontSize: 100,
          color: 'white',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 350,
          textAlign: 'center',
        }}>
        Hello
      </Text>
    </View>
  );
};

export default Topic6;
