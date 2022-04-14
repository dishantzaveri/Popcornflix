import React , {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Providers from './navigation';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();
function App() {

  const [hideSplash, setHideSplash] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setHideSplash(true);
  }, 1000); // amount of time the splash is shown from the time component is rendered
}, []);

useEffect(() => {
  hideSplash && SplashScreen.hide();
}, [hideSplash]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Providers">
        <Stack.Screen
          name="Providers"
          component={Providers}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
