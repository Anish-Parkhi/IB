import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const routes = () => [
  {
    id: 1,
    routeName: 'My Bookings',
    navigateTo: 'myBookings',
  },
  {
    id: 2,
    routeName: 'Contact Us',
    navigateTo: 'contactUs',
  },
  {
    id: 3,
    routeName: 'Edit Profile',
    navigateTo: 'editProfile',
  },
  {
    id: 4,
    routeName: 'Account Settings',
    navigateTo: 'accountSettings',
  },
  {
    id: 5,
    routeName: 'Submit a Complaint',
    navigateTo: 'submitComplaint',
  },
  {
    id: 6,
    routeName: 'Logout',
    navigateTo: 'logout',
  },
];

const MyAccount = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('LandingPage');
  };
  return (
    <View style={styles.accountMainContainer}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../Images/accountbg.png')}>
        <Text style={styles.myAccountHeader}>My Account</Text>
        <View style={styles.hr}></View>
        <View style={styles.accoutinnerContainer}>
          {routes().map(item => {
            return (
              <View key={item.id}>
                <View style={styles.routeWrapper}>
                  <Text style={styles.routeText}>{item.routeName}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.routeName === 'Logout') {
                        handleLogout();
                      } else {
                        navigation.navigate(item.navigateTo);
                      }
                    }}>
                    <FontAwesomeIcon
                      style={{padding: 10, marginTop: 15, marginRight: 15}}
                      icon={faChevronRight}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.moreInfoContainer}>
          <Text style={{color: 'black'}}>Share</Text>
          <View style={styles.verticalRule}></View>
          <Text style={{color: 'black'}}>Rate Us</Text>
          <View style={styles.verticalRule}></View>
          <View style={styles.imageContainer}>
            <Image
              style={{objectFit: 'contain', width: 40, height: 40}}
              source={require('../../../Images/pwdLogo.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MyAccount;
