import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AccountSettings from './components/Account/AccountSettings/AccountSettings';
import Complaint from './components/Account/Complaint/Complaint';
import ContactUs from './components/Account/ContactUs/ContactUs';
import EditAccount from './components/Account/EditAccount/EditAccount';
import Logout from './components/Account/Logout/Logout';
import MyAccount from './components/Account/MyAccount/MyAccount';
import MyBookings from './components/Account/MyBookings/MyBookings';
import BookingConfirm from './components/BookingConfirm/BookingConfirm';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import ReviewBooking from './components/ReviewBooking/ReviewBooking';
import RoomDetails from './components/RoomDetails/RoomDetails';
import SplashScreen from './components/SplashScreen/SplashScreen';
import UserLogin from './components/userLogin/UserLogin';
import UserRegistration from './components/userRegistration/UserRegistration/UserRegistration';
import {UserProvider} from './context/UserContext';
const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LandingPage" component={Landing} />
          <Stack.Screen name="UserRegistration" component={UserRegistration} />
          <Stack.Screen name="UserLogin" component={UserLogin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RoomDetails" component={RoomDetails} />
          <Stack.Screen name="ReviewBooking" component={ReviewBooking} />
          <Stack.Screen name="BookingConfirm" component={BookingConfirm} />
          <Stack.Screen name="MyAccount" component={MyAccount} />
          <Stack.Screen name="contactUs" component={ContactUs} />
          <Stack.Screen name="myBookings" component={MyBookings} />
          <Stack.Screen name="editProfile" component={EditAccount} />
          <Stack.Screen name="accountSettings" component={AccountSettings} />
          <Stack.Screen name="submitComplaint" component={Complaint} />
          <Stack.Screen name="logout" component={Logout} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
