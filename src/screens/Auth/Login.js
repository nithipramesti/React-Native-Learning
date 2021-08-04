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
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

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
  loginBtn: {
    backgroundColor: 'navy',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 24,
  },
});

const Login = props => {
  const globalAuth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  };

  const loginBtnHandler = () => {
    Axios.get('http://localhost:2000/users', {
      params: {
        username: loginForm.username,
        password: loginForm.password,
      },
    })
      .then(res => {
        if (res.data.length) {
          AsyncStorage.setItem('username', loginForm.username)
            .then(() => {
              AsyncStorage.setItem(
                'interceptorId',
                Axios.interceptors.request
                  .use(request => {
                    request.headers['LOGGED-IN-USER'] = loginForm.username;
                    return request;
                  })
                  .toString(),
              ).then(() => {
                dispatch({
                  type: 'CHANGE_USERNAME',
                  payload: loginForm.username,
                });
              });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          Alert.alert('Username or password invalid!');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{...styles.main}}>
        <Text style={{...styles.h1}}>Log In</Text>
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
            style={{...styles.loginBtn}}
            onPress={loginBtnHandler}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 16, alignSelf: 'center'}}
            onPress={() => props.navigation.push('Register')}>
            <Text style={{color: 'navy', textDecorationLine: 'underline'}}>
              Register a new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
