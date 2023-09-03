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

const Landing = () => {
  const navigation = useNavigation();
  const redirectToLogin = () => {
    navigation.navigate('UserLogin');
  };
  const redirectToRegister = () => {
    navigation.navigate('UserRegistration');
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../Images/accountbg.png')}>
      <View style={styles.landingMainContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <View>
          <Image
            style={styles.landingPageImage}
            source={require('../../Images/ibImg.png')}
          />
        </View>
        <View style={styles.loginSignInContiner}></View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={redirectToLogin}>
          <Text style={styles.landingContainerLogin}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.middleContainer}>
          <View style={styles.hr} />
          <Text>or</Text>
          <View style={styles.hr} />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={redirectToRegister}>
          <Text style={styles.landingContainerSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Landing;
