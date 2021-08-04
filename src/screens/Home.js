import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {TextInput} from 'react-native-gesture-handler';

const style = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  navBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'pink',
    borderRadius: 4,
    alignSelf: 'center',
  },
  userListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  flatListContainer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 4,
    marginHorizontal: 16,
    paddingVertical: 6,
    flex: 1,
  },
});

const Home = props => {
  const dispatch = useDispatch();

  const globalAuth = useSelector(state => state.auth);

  const [userList, setUserList] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userInput, setUserInput] = useState('');

  const fetchUsers = () => {
    Axios.get('http://localhost:2000/users')
      .then(res => {
        console.log(res.data);
        setUserList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const refreshHandler = () => {
    setIsRefreshing(true);
    Axios.get('http://localhost:2000/users')
      .then(res => {
        console.log(res.data);
        setUserList(res.data);
        setIsRefreshing(false);
      })
      .catch(err => {
        console.log(err);
        setIsRefreshing(false);
      });
  };

  const renderUserList = ({item}) => {
    return (
      <View style={{...style.userListItem}}>
        <Text>{item.username}</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('UserProfile', item)}
          style={{...style.navBtn}}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const inputHandler = text => {
    setUserInput(text);
  };

  const sendBtnHandler = () => {
    Axios.post('http://localhost:2000/users', {username: userInput})
      .then(res => {
        console.log(res.data);
        fetchUsers();
        setUserInput('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{...style.mainContainer}}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          onChangeText={inputHandler}
          style={{...style.textInput}}
          value={userInput}
        />
        <TouchableOpacity onPress={sendBtnHandler} style={{...style.navBtn}}>
          <Text>SEND</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{...style.flatListContainer}}
        data={userList}
        renderItem={renderUserList}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshHandler}
          />
        }
      />
    </View>
  );
};

export default Home;
