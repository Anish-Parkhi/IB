import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export default function SplashScreen() {
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('emailId');
      if (value !== null) {
        setTimeout(() => {
          navigation.navigate('Home', {useInfo: value});
        }, 600);
      } else {
        setTimeout(() => {
          navigation.navigate('LandingPage');
        }, 600);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImgWrapper}>
        <Image
          style={styles.mahagovbackgroundImg}
          source={require('../../Images/govLogo.png')}
        />
        <Image
          style={styles.pwdbackgroundImg}
          source={require('../../Images/pwdLogo.png')}
        />
      </View>
      <View style={styles.welcomeBannerContainer}>
        <Text style={styles.welcomeTextMain}>Welcome to PWD Guest House</Text>
        <Text style={styles.welcomeTextMain}>Ahemdnagar</Text>
      </View>
    </View>
  );
}
