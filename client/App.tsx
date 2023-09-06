import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import ReviewBooking from './components/ReviewBooking/ReviewBooking';
import RoomDetails from './components/RoomDetails/RoomDetails';
import UserLogin from './components/userLogin/UserLogin';
import UserRegistration from './components/userRegistration/UserRegistration/UserRegistration';
import {UserProvider} from './context/UserContext';
import BookingConfirm from './components/BookingConfirm/BookingConfirm';
const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="LandingPage" component={Landing} />
          <Stack.Screen name="UserRegistration" component={UserRegistration} />
          <Stack.Screen name="UserLogin" component={UserLogin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RoomDetails" component={RoomDetails} />
          <Stack.Screen name="ReviewBooking" component={ReviewBooking} />
          <Stack.Screen name="BookingConfirm" component={BookingConfirm} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
