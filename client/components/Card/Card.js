import {
  faBed,
  faCheck,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Card = ({
  data,
  isRoomAvailable,
  formattedStartDate,
  formattedEndDate,
}) => {
  const naviation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        naviation.navigate('RoomDetails', {
          roomData: data,
          isRoomAvailable: isRoomAvailable,
          checkIn: formattedStartDate,
          checkOut: formattedEndDate,
        });
      }}
      style={styles.cardMainContainer}>
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
              isRoomAvailable === true
                ? styles.availableText
                : styles.notAvailableText
            }>
            {isRoomAvailable === true
              ? 'Available on selected dates'
              : 'Not Available on selected dates'}
          </Text>
          {isRoomAvailable === true ? (
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
