import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';

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
});

const users = [
  {
    id: 1,
    username: 'johndoe',
  },
  {
    id: 2,
    username: 'marryjane',
  },
  {
    id: 3,
    username: 'barackobama',
  },
];

const Home = props => {
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

  return (
    <View style={{...style.mainContainer}}>
      <Text>Home Screen</Text>

      <FlatList
        style={{...style.flatListContainer}}
        data={users}
        renderItem={renderUserList}
      />
    </View>
  );
};

export default Home;
