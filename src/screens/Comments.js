import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    marginHorizontal: 5,
  },
});

const Comments = props => {
  const dispatch = useDispatch();
  const globalState = useSelector(state => state.auth);

  const changeGlobalState = () => {
    const newUsername = 'jessy';
    AsyncStorage.setItem('username', newUsername)
      .then(() => {
        dispatch({
          type: 'CHANGE_USERNAME',
          payload: newUsername,
        });
      })
      .catch(() => {
        console.log('error');
      });
  };

  const resetGlobalState = () => {
    AsyncStorage.removeItem('username')
      .then(() => {
        dispatch({
          type: 'RESET_USERNAME',
        });
      })
      .catch(() => {
        console.log('error');
      });
  };

  const loadGlobalState = () => {
    AsyncStorage.getItem('username')
      .then(value => {
        dispatch({
          type: 'CHANGE_USERNAME',
          payload: value,
        });
      })
      .catch(() => {
        console.log('error');
      });
  };

  useEffect(() => {
    loadGlobalState();
  }, []);

  return (
    <View style={{...style.mainContainer}}>
      <Text>Comments Screen</Text>
      <Text>Username: {globalState.username}</Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={changeGlobalState} style={{...style.navBtn}}>
          <Text>Change Global State</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetGlobalState} style={{...style.navBtn}}>
          <Text>Reset Global State</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comments;
