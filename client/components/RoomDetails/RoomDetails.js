import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBed,
    faCheck,
    faTimes,
    faUsers,
  } from '@fortawesome/free-solid-svg-icons';


  const data = {
    name: 'Sina Suit',
    description : 'Experience luxurious comfort in our spacious suite, featuring stunning city views and modern amenities.',
    accomodation: '2+1',
    bedType: 'King Bed',
    bedNumber: '1',
    isAvailable: true,
    rules: [
        'Check in 12 pm Check out 10 am',
        'Govt ID required as proof',
        'Extra mattress will not be provided '
    ],
  }

const RoomDetails = () => {
  return (
    <View style={styles.roomDetailsContainer}>
      <View style={styles.imgContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.bottomMainContainer}>
        <View style={styles.roomNameContainer}>
            <Text style={styles.roomName}>{data.name}</Text>
            <Text style={styles.roomDescription}>{data.description}</Text>
        </View>

        {/* Accomodation and bed info container  */}
        <View style={styles.roomInfoContainer}>
          <View style={styles.roomAccomodationContainer}>
            <View>
              <FontAwesomeIcon icon={faUsers} size={24} color="black" />
            </View>
            <View>
              <Text style={{fontSize: 12, color: 'black'}}>Accommodate</Text>
              <Text style={styles.accomodation}>2+1</Text>
            </View>
          </View>
          <View style={styles.bedInfoContainer}>
            <View>
              <FontAwesomeIcon icon={faBed} size={24} color="black" />
            </View>
            <View>
              <Text style={styles.bedInfo}>King Bed</Text>
              <Text style={styles.bedInfoNumber}>1</Text>
            </View>
          </View>
        </View>


        {/* Ameniteies Container  */}

        <View style={styles.amenitiesContainer}>
            <View style={styles.amenitiesContainerHeader}>
                <Text style={styles.amenitiesContainerHeaderText}>Amenities</Text>
            </View>
            <View style={styles.amrnitiesMainContainer}>
                <View style={styles.indivisulAmenity}>
                    <Text>Image</Text>
                    <Text>Air Condiotiner</Text>
                </View>
            </View>
        </View>

        {/* Rules Container  */}


        <View style={styles.rulesContainer}>
            <Text style={styles.rulesContainerHeader}>Rules</Text>
            <Text style={styles.rulesDescription}>
                loda lassan
            </Text>
        </View>

        {/* Available Container  */}

        <View></View>


        {/* Booking Container  */}
        <View style={styles.buttonContainer}>
            <Button title='Book Now' style={styles.bookingButton} />
        </View>
      </View>
    </View>
  )
}

export default RoomDetails