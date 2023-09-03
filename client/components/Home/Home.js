import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Alert, Image, TextInput, TouchableOpacity, View} from 'react-native';
import profile from '../../Images/Icons/profile.png';
import Card from '../Card/Card';
import styles from './styles';

const data = [
  {
    id: 1,
    name: 'Sina Suit',
    description:
      'Experience luxurious comfort in our spacious suite, featuring stunning city views and modern amenities.',
    accomodation: '2+1',
    bedType: 'Single bed',
    bedNumber: 2,
    isAvailable: true,
  },
];

const Home = () => {
  return (
    <View style={styles.homeMainContainer}>
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
      <View style={styles.searchBarContainer}>
        <FontAwesomeIcon
          style={styles.searchIcon}
          icon={faSearch}
          size={20}
          color="black"
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#000"
          value={''}
        />
      </View>

      {/* CARD COMPONENT */}
      {data.map(item => {
        return <Card key={item.id} data={item} />;
      })}
    </View>
  );
};

export default Home;
