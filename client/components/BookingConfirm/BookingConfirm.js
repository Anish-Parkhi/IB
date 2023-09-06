import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getApi} from '../../utils/baseApi/api';
import styles from './styles';
const BookingConfirm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const recievedData = route.params?.bookingId;
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    getApi(`/api/bookingConfirmation?bookingId=${recievedData}`)
      .then(response => {
        setBookingData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(bookingData?.response);
  // const bookingInfo = bookingData.response;
  return (
    <View>
      {bookingData?.response?.map(item => {
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
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 3,
                  fontWeight: '500',
                }}>
                Booking ID: {item?.bookingId}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 3,
                  fontWeight: '500',
                }}>
                Check In: {item?.checkInDate}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 3,
                  fontWeight: '500',
                }}>
                Check Out: {item?.checkOutDate}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 3,
                  fontWeight: '500',
                }}>
                Room Name: {item?.roomName}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 3,
                  fontWeight: '500',
                }}>
                Payment Status: {item?.paymentStatus}
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
      })}
    </View>
  );
};

export default BookingConfirm;
