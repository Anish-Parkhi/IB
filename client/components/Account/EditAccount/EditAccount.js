import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const routesData = [
  {
    id: 1,
    routeName: 'Change Email Id',
    navigateTo: 'changeEmail',
  },
  {
    id: 2,
    routeName: 'Change Password',
    navigateTo: 'changePassword',
  },
  {
    id: 3,
    routeName: 'Change Mobile Number',
    navigateTo: 'changeMobileNumber',
  },
  {
    id: 4,
    routeName: 'Change Government Identification',
    navigateTo: 'changeGovIdentification',
  },
  {
    id: 5,
    routeName: 'Delete Account',
    navigateTo: 'deleteAccount',
  },
];
const EditAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.editProfileContainer}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../Images/accountbg.png')}>
        <Text style={styles.profileDetailsHeader}>Edit Profile Details</Text>
        <View style={styles.accoutinnerContainer}>
          {routesData.map(item => {
            return (
              <View key={item.id}>
                <View style={styles.routeWrapper}>
                  <Text style={styles.routeText}>{item.routeName}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(item.navigateTo);
                    }}>
                    <FontAwesomeIcon
                      style={{padding: 10, marginTop: 15, marginRight: 15}}
                      icon={faChevronRight}
                    />
                  </TouchableOpacity>
                </View>
                {item.routeName === 'Delete Account' ? null : (
                  <View style={styles.underline}></View>
                )}
              </View>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

export default EditAccount;
