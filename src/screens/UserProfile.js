import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'pink',
    borderRadius: 4,
    marginTop: 10,
  },
});

const UserProfile = props => {
  const routeParams = props.route.params;

  return (
    <View style={{...style.mainContainer}}>
      <Text>User Profile Screen</Text>
      <Text>userID: {routeParams.id}</Text>
      <Text>username: {routeParams.username}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={{...style.navBtn}}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
