import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Profile from './screens/Profile';
import agecalculator from './screens/agecalculator';
import tabs from './navigation/tabs';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogInScreen'>
      
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}
         options={{
          headerShown: false,
        }}  />
        <Stack.Screen name='agecalculator' component={agecalculator}/>
        <Stack.Screen name='tabs' component={tabs}
         options={{
          headerShown: false,
        }}  />
        <Stack.Screen name='LogInScreen' component={LogInScreen}
          options={{
            headerShown: false,
          }}       />
            <Stack.Screen name='Profile' component={Profile} options={{
            headerShown: false,
          }}  />
            
     
      </Stack.Navigator>
    </NavigationContainer>
  )
}
