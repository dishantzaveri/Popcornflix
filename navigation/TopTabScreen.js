import React from 'react'
import {
    View,
    Text,
  } from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import getTrendingMovies from './Trending';
import getLatestMovies from './Latest';
import getUpcomingMovies from './Upcoming';

const Tab = createMaterialTopTabNavigator();

function TopTabScreen() {
  const insets= useSafeAreaInsets();
    return (
      <Tab.Navigator
            initialRouteName="Upcoming"
            screenOptions={{
              activeTintColor:"#e91e63",
              labelStyle:{fontSize:12},
              style:{backgroundColor:"white" , marginTop:insets.top},
            }}
            >
            <Tab.Screen
            name="Upcoming"
            component={getUpcomingMovies}
            options={{tabBarLabel:"Upcoming"}}
            />
            <Tab.Screen
            name="Trending"
            component={getTrendingMovies}
            options={{tabBarLabel:"Trending"}}
            />
            <Tab.Screen
            name="Latest"
            component={getLatestMovies}
            options={{tabBarLabel:"Latest"}}
            />       
            </Tab.Navigator>
    );
  }
  
  export default function TopBarNavigator(){
    return  <TopTabScreen />
  }


  