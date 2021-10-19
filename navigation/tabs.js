import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import FavouriteScreen from './FavouriteScreen';
import SearchScreen from './SearchScreen';
import Profile from '../screens/Profile';
import TopBarNavigator from './TopTabScreen';

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
  const email=route.params.text
  return(
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Movies"
        component={TopBarNavigator}
        options={{
          headerShown: false,  
          tabBarLabel: 'Movies',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          headerShown: false,  
          tabBarLabel: 'Favourites',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,  
          tabBarLabel: 'Search',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
       initialParams={{text: email}}
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,  
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
}
export default Tabs;


