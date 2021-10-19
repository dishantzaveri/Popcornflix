import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import agecalculator from "../screens/agecalculator"
import Tabs from './tabs';
import moviedetail from './moviedetail';

const Stack = createStackNavigator();
export default function TabNavigation({userinfo}) {
  const email=userinfo.email
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
        initialParams={{text:email}}
          name="tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="agecalculator" component={agecalculator} />
        <Stack.Screen
          name="moviedetail"
          component={moviedetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
