import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import profile from '../../Images/Icons/profile.png';
import styles from './styles';

const TopNav = () => {
  return (
    <View style={styles.topLogoContainer}>
      <Image
        style={styles.pwdLogoImg}
        source={require('../../Images/pwdLogo.png')}
      />
      <View style={styles.accoutCircleContainer}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Account Info');
          }}>
          <Image source={profile} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;
