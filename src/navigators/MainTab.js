import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Comments from '../screens/Comments';
import MainStack from './MainStack';
import TopTabNav from './TopTabNav';

const BottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'MainStack') {
              iconName = 'home';
            } else if (route.name === 'Comments') {
              iconName = 'comments';
            }
            return <FontAwesome name={iconName} color={color} size={size} />;
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: '#4316D8',
        style: {
          borderRadius: 16,
          position: 'absolute',
          left: 12,
          right: 12,
          bottom: 40,
        },
      }}>
      <BottomTab.Screen
        component={MainStack}
        name="MainStack"
        options={{title: 'Home'}}
      />
      <BottomTab.Screen component={TopTabNav} name="Comments" />
    </BottomTab.Navigator>
  );
};

export default MainTab;
