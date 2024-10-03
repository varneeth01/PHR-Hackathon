import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './src/components/Registration';
import Login from './src/components/Login';
import ProfileUpdate from './src/components/ProfileUpdate';
import ScanShare from './src/components/ScanShare';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        {/* Registration Screen */}
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: 'ABHA Registration' }}
        />
        
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login to ABHA' }}
        />

        {/* Profile Update Screen */}
        <Stack.Screen
          name="ProfileUpdate"
          component={ProfileUpdate}
          options={{ title: 'Update Profile' }}
        />

        {/* Scan & Share Screen */}
        <Stack.Screen
          name="ScanShare"
          component={ScanShare}
          options={{ title: 'Scan & Share' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
