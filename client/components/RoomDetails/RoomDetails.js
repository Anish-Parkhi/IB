import {faBed, faCheck, faUsers, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {Image, Text, View} from 'react-native';
import TopNav from '../TopNav/TopNav';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';

const RoomDetails = () => {
  const route = useRoute();
  const {roomData} = route.params;
  const {isRoomAvailable} = route.params;
  const {checkIn} = route.params;
  const {checkOut} = route.params;
  const {image} = route.params;

  const navigation = useNavigation();
  return (
    <View>
      <TopNav />
      <View style={styles.roomDetailsHeader}>
        <Text style={styles.header}>Room Details</Text>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.roomDetailsContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.roomImage}
            source={image}
          />
        </View>
        <View style={styles.bottomMainContainer}>
          <View style={styles.roomNameContainer}>
            <Text style={styles.roomName}>{roomData.roomName}</Text>
            <Text style={styles.roomDescription}>{roomData.description}</Text>
          </View>

          {/* Accomodation and bed info container  */}
          <View style={styles.roomInfoContainer}>
            <View style={styles.roomAccomodationContainer}>
              <View>
                <FontAwesomeIcon icon={faUsers} size={24} color="black" />
              </View>
              <View>
                <Text style={{fontSize: 12, color: 'black'}}>Accommodate</Text>
                <Text style={styles.accomodation}>{roomData.occupancy}</Text>
              </View>
            </View>
            <View style={styles.bedInfoContainer}>
              <View>
                <FontAwesomeIcon icon={faBed} size={24} color="black" />
              </View>
              <View>
                <Text style={styles.bedInfo}>{roomData.bedInfo.bedType}</Text>
                <Text style={styles.bedInfoNumber}>
                  {roomData.bedInfo.bedCount}
                </Text>
              </View>
            </View>
          </View>

          {/* Ameniteies Container  */}

          {/* <View style={styles.amenitiesContainer}>
            <View style={styles.amenitiesContainerHeader}>
                <Text style={styles.amenitiesContainerHeaderText}>Amenities</Text>
            </View>
            <View style={styles.amrnitiesMainContainer}>
                <View style={styles.indivisulAmenity}>
                    <View style={styles.iconBackground}>
                        <Image style={styles.logo} source={ac} />
                    </View>
                    <Text style={styles.iconBottomText}>AC</Text>
                </View>
                <View style={styles.indivisulAmenity}>
                    <View style={styles.iconBackground}>
                        <Image style={styles.logo} source={geyser} />
                    </View>
                    <Text style={styles.iconBottomText}>Geyser</Text>
                </View>
                <View style={styles.indivisulAmenity}>
                    <View style={styles.iconBackground}>
                        <Image style={styles.logo} source={parking} />
                    </View>
                    <Text style={styles.iconBottomText}>Car Parking</Text>
                </View>
                <View style={styles.indivisulAmenity}>
                    <View style={styles.iconBackground}>
                        <Image style={styles.logo} source={resturant} />
                    </View>
                    <Text style={styles.iconBottomText}>Resturant</Text>
                </View>
                <View style={styles.indivisulAmenity}>
                    <View style={styles.iconBackground}> 
                        <Image style={styles.logo} source={roomService} />
                    </View>
                    <Text style={styles.iconBottomText}>Room Service</Text>
                </View>
            </View>
        </View> */}

          {/* Rules Container  */}

          <View style={styles.rulesContainer}>
            <Text style={styles.rulesContainerHeader}>Rules</Text>
            {roomData.rules.map((rule,index) => {
              return (
                <View key={index} style={styles.rulesList}>
                  <Text style={styles.rulesDescription}>•</Text>
                  <Text style={styles.rulesDescription}>{rule}</Text>
                </View>
              );
            })}
          </View>

          {/* Available Container  */}

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

          {/* Booking Container  */}
          <View style={styles.buttonContainer}>
            <Button
            onPress={() => {
              navigation.navigate('ReviewBooking', {
                roomData: roomData,
                checkIn: checkIn,
                checkOut: checkOut,
              });
            }}
            disabled={!isRoomAvailable}
              containerStyle={{
                width: '40%',
                alignSelf: 'flex-end',
                marginTop: 15,
                borderRadius: 11,
              }}
              title="Book Now"
              color={'#26B0EB'}
              style={styles.bookingButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomDetails;
