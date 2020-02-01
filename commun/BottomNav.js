import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Inbox from '../screens/Inbox';
import Trip from '../screens/Trip';
import Profile from '../screens/Profile';

const BottomNav = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={35} />
        ),
      },
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'Saved',
        tabBarIcon: ({tintColor}) => (
          <Icon name="heart" color={tintColor} size={35} />
        ),
      },
    },
    Trip: {
      screen: Trip,
      navigationOptions: {
        tabBarLabel: 'Add',
        tabBarIcon: ({tintColor}) => (
          <Icon name="plus" color={tintColor} size={35} />
        ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({tintColor}) => (
          <Icon name="comment" color={tintColor} size={35} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={35} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      upperCaseLabel: true,
      activeTintColor: '#e91e63',
      inactiveTintColor: '#111',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        // backgroundColor: 'blue',
        height: 60,
        paddingVertical: 5,
        borderWidth: 0,
        borderTopColor: '#fff',
      },
    },
  },

  {
    initialRouteName: 'Explore',
  },
);

export default BottomNav;
