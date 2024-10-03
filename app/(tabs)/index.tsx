import { StyleSheet } from 'react-native';
import { NavigationContainer } from '/home/varneeth/Desktop/Hackathon/learningrn/node_modules/@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from '/home/varneeth/Desktop/Hackathon/learningrn/app/components/Registration.jsx';
import Login from '/home/varneeth/Desktop/Hackathon/learningrn/app/components/Login.jsx';
import ProfileUpdate from '/home/varneeth/Desktop/Hackathon/learningrn/app/components/ProfileUpdate.jsx';
import ScanShare from '/home/varneeth/Desktop/Hackathon/learningrn/app/services/scanService.jsx';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
const Stack = createStackNavigator();
export default function TabOneScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const express = require('express');
const connectDB = require('/home/varneeth/Desktop/Hackathon/learningrn/app/config/db.js');
const userRoutes = require('/home/varneeth/Desktop/Hackathon/learningrn/app/models/User.js');

const app = express();
connectDB();

app.use(express.json()); // For parsing application/json

// User API Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
