import {
  faBed,
  faCheck,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Card = ({data}) => {
  const naviation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {
      naviation.navigate('RoomDetails', {roomData: data});
    }} style={styles.cardMainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.roomImage}
          source={require('../../Images/roomImg.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.suitNameContainer}>
          <Text style={styles.suitName}>{data.roomName}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={styles.roomInfoContainer}>
          <View style={styles.roomAccomodationContainer}>
            <View>
              <FontAwesomeIcon icon={faUsers} size={24} color="black" />
            </View>
            <View>
              <Text style={{fontSize: 12}}>Accommodate</Text>
              <Text style={styles.accomodation}>{data.occupancy}</Text>
            </View>
          </View>
          <View style={styles.bedInfoContainer}>
            <View>
              <FontAwesomeIcon icon={faBed} size={24} color="black" />
            </View>
            <View>
              <Text style={styles.bedInfo}>{data.bedInfo.bedType}</Text>
              <Text style={styles.bedInfoNumber}>{data.bedInfo.bedCount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.availableContainer}>
          <Text
            style={
              data.isAvailable === true
                ? styles.availableText
                : styles.notAvailableText
            }>
            {data.isAvailable === true
              ? 'Available on selected dates'
              : 'Not Available on selected dates'}
          </Text>
          {data.isAvailable === true ? (
            <FontAwesomeIcon
              style={styles.availAbleIcon}
              icon={faCheck}
              size={24}
              color="#1DA933"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              style={styles.availAbleIcon}
              size={24}
              color="red"
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
