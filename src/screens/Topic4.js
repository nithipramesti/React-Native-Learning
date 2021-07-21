import React from 'react';
import {View, Text} from 'react-native';
import {padding, margin} from '../styles';

const Topic4 = () => {
  return (
    <View>
      <Text style={{marginTop: 80}}>Topic 4</Text>
      <View style={{...padding.p3, borderColor: 'red', borderWidth: 1}}>
        <Text>Padding</Text>
      </View>
      <View style={{...margin.m4, borderColor: 'blue', borderWidth: 1}}>
        <Text>Margin</Text>
      </View>
    </View>
  );
};

export default Topic4;
