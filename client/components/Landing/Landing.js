import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Landing = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const redirectToLogin = () => {
    navigation.navigate('UserLogin');
  };
  const redirectToRegister = () => {
    navigation.navigate('UserRegistration');
  };

  useEffect(() => {
    const backAction = () => {
      if (isFocused) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isFocused]);

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
