import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import profile from '../../Images/Icons/profile.png';
import styles from './styles';

const TopNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topLogoContainer}>
      <Image
        style={styles.pwdLogoImg}
        source={require('../../Images/pwdLogo.png')}
      />
      <View style={styles.accoutCircleContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyAccount');
          }}>
          <Image source={profile} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;
