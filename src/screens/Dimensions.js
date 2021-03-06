import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import lakeImage from '../assets/images/lake.jpg';

const styles = StyleSheet.create({
  button: {
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  buttonA: {
    backgroundColor: 'lightblue',
  },
  buttonB: {
    backgroundColor: 'pink',
  },
});

const IMAGE_WIDTH_HEIGHT = Dimensions.get('window').width * 0.6;

const TopicDimensions = () => {
  return (
    <View>
      <Text>Dimensions</Text>
      <Text>Height: {Dimensions.get('window').width}</Text>
      <Text>Width: {Dimensions.get('window').height}</Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <TouchableOpacity style={{...styles.button, ...styles.buttonA}}>
          <Text>Button A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, ...styles.buttonB}}>
          <Text>Button B</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={lakeImage}
        style={{
          width: IMAGE_WIDTH_HEIGHT,
          height: IMAGE_WIDTH_HEIGHT,
          borderRadius: IMAGE_WIDTH_HEIGHT * 0.5,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default TopicDimensions;
