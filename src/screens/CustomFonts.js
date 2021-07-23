import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../styles/typography';

const CustomFonts = () => {
  return (
    <View>
      <Text>Regular Fonts</Text>
      <Text style={{fontFamily: 'OpenSans-Regular'}}>Open Sans Regular</Text>
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Open Sans Bold</Text>
      <Text style={typography.h1}>H1 Title</Text>
    </View>
  );
};

export default CustomFonts;
