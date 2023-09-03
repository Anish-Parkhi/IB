import {faBed, faCheck, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {Image, Text, View} from 'react-native';
import TopNav from '../TopNav/TopNav';
import styles from './Style';

const data = {
  name: 'Sina Suit',
  description:
    'Experience luxurious comfort in our spacious suite, featuring stunning city views and modern amenities.',
  accomodation: '2+1',
  bedType: 'King Bed',
  bedNumber: '1',
  isAvailable: true,
  rules: [
    'Check in 12 pm Check out 10 am',
    'Govt ID required as proof',
    'Extra mattress will not be provided ',
  ],
};

const RoomDetails = () => {
  const route = useRoute();
  const {roomData} = route.params;
  console.log(roomData);
  return (
    <View>
      <TopNav />
      <View style={styles.roomDetailsContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.roomImage}
            source={require('../../Images/roomImg.png')}
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
            {roomData.rules.map(rule => {
              return (
                <View style={styles.rulesList}>
                  <Text style={styles.rulesDescription}>•</Text>
                  <Text style={styles.rulesDescription}>{rule}</Text>
                </View>
              );
            })}
          </View>

          {/* Available Container  */}

          <View style={styles.availableContainer}>
            <Text style={styles.availableContainerText}>
              Available on selected dates
            </Text>
            <FontAwesomeIcon
              style={{marginLeft: 3}}
              size={22}
              color="#1DA933"
              icon={faCheck}
            />
          </View>

          {/* Booking Container  */}
          <View style={styles.buttonContainer}>
            <Button
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
