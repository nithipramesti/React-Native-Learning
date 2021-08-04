import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Comments from '../screens/Comments';

const style = StyleSheet.create({
  navBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'pink',
    borderRadius: 4,
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();

const MainStack = () => {
  const globalAuth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logoutBtnHandler = () => {
    AsyncStorage.removeItem('username')
      .then(() => {
        AsyncStorage.getItem('interceptorId').then(interceptorId => {
          Axios.interceptors.request.eject(parseInt(interceptorId));

          AsyncStorage.removeItem('interceptorId').then(() => {
            dispatch({
              type: 'RESET_USERNAME',
            });
          });
        });
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          title: `Hello, ${globalAuth.username}`,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{...style.navBtn}}
                onPress={logoutBtnHandler}>
                <Text>Log out</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen component={UserProfile} name="UserProfile" />
    </Stack.Navigator>
  );
};

export default MainStack;
