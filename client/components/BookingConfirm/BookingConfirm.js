import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const BookingConfirm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const recievedData = route.params?.data;
  return (
    <View style={styles.bookingConfirmationContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.iconBackground}>
          <FontAwesomeIcon icon={faCheck} size={80} color="white" />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
            alignSelf: 'center',
          }}>
          Booking Confirmed
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerContainerHeader}>Booking Details</Text>
        <Text
          style={{color: 'black', fontSize: 15, padding: 3, fontWeight: '500'}}>
          Booking ID: 21212121
        </Text>
        <Text
          style={{color: 'black', fontSize: 15, padding: 3, fontWeight: '500'}}>
          Check In: 20/12/2023
        </Text>
        <Text
          style={{color: 'black', fontSize: 15, padding: 3, fontWeight: '500'}}>
          Check Out: 22/12/2023
        </Text>
        <Text
          style={{color: 'black', fontSize: 15, padding: 3, fontWeight: '500'}}>
          Room Name: Sina Suit
        </Text>
        <Text
          style={{color: 'black', fontSize: 15, padding: 3, fontWeight: '500'}}>
          Payment Status: Completed
        </Text>
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          containerStyle={{marginTop: 18, borderRadius: 5}}
          title="Go to Home"
        />
      </View>
    </View>
  );
};

export default BookingConfirm;
