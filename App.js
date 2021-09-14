import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './screens/LogInScreen';
import SignInScreen from './screens/SignInScreen';
import Profile from './screens/Profile';
import agecalculator from './screens/agecalculator';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogInScreen'>
      
        <Stack.Screen name='SignInScreen' component={SignInScreen}/>
        <Stack.Screen name='agecalculator' component={agecalculator}/>
        <Stack.Screen name='LogInScreen' component={LogInScreen}
      
          options={{
            headerShown: false,
          }}       />
            <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
     
      </Stack.Navigator>
    </NavigationContainer>
  )
}
