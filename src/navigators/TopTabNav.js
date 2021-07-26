import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import Comments from '../screens/Comments';
import TopComments from '../screens/TopComment';
import MainStack from './MainStack';

const TopTab = createMaterialTopTabNavigator();

const TobTabNav = () => {
  return (
    <TopTab.Navigator style={{marginTop: 50}} lazy>
      <TopTab.Screen component={Comments} name="AllComments" />
      <TopTab.Screen component={TopComments} name="TopComments" />
    </TopTab.Navigator>
  );
};

export default TobTabNav;
