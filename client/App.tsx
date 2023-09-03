import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import RoomDetails from './components/RoomDetails/RoomDetails';
import UserLogin from './components/userLogin/UserLogin';
import UserRegistration from './components/userRegistration/UserRegistration/UserRegistration';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="RoomDetails">
        <Stack.Screen name="LandingPage" component={Landing} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RoomDetails" component={RoomDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white',
  },
});

export default App;
