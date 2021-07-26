import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Comments from '../screens/Comments';
import MainStack from './MainStack';
import TopTabNav from './TopTabNav';

const BottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <BottomTab.Navigator>
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
