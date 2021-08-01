import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 32,
  },
  h1: {
    fontSize: 40,
    marginBottom: 35,
  },
  TextInput: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  registerBtn: {
    backgroundColor: 'navy',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 24,
  },
});

const Register = props => {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (field, value) => {
    setRegisterForm({
      ...registerForm,
      [field]: value,
    });
  };

  const registerBtnHandler = () => {
    Axios.get('http://localhost:2000/users', {
      params: {
        username: registerForm.username,
      },
    })
      .then(res => {
        if (!res.data.length) {
          Axios.post('http://localhost:2000/users', {
            username: registerForm.username,
            password: registerForm.password,
          })
            .then(() => {
              AsyncStorage.setItem('username', registerForm.username)
                .then(() => {
                  dispatch({
                    type: 'CHANGE_USERNAME',
                    payload: registerForm.username,
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          Alert.alert('Username has been used!');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{...styles.main}}>
        <Text style={{...styles.h1}}>Register</Text>
        <View>
          <Text>Username</Text>
          <View style={{...styles.TextInput, marginBottom: 12}}>
            <TextInput
              onChangeText={text => inputHandler('username', text)}
              placeholder="Your username"
            />
          </View>
          <Text>Password</Text>
          <View style={{...styles.TextInput, marginBottom: 12}}>
            <TextInput
              onChangeText={text => inputHandler('password', text)}
              secureTextEntry
              placeholder="Your password"
            />
          </View>
          <TouchableOpacity
            onPress={registerBtnHandler}
            style={{...styles.registerBtn}}>
            <Text style={{color: 'white'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
