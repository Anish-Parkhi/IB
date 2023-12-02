import {useNavigation, useRoute} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View,Dimensions} from 'react-native';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LottieView from 'lottie-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import Loader from '../../common/Loader';
import {useUserContext} from '../../context/UserContext';
import {postApi} from '../../utils/baseApi/api';
import TopNav from '../TopNav/TopNav';
import styles from './styles';


const height = Dimensions.get('window').height;

const ReviewBooking = () => {
  const route = useRoute();
  const {roomData} = route.params;
  const {checkIn} = route.params;
  const {checkOut} = route.params;
  const user = useUserContext();

  const [modalVisible, setModalVisible] = useState(false);
  // const bookingId = uuidv4();
  const [data, setData] = useState({
    userInfo: {
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
    },
    roomName: roomData.roomName,
    checkInDate: checkIn,
    checkOutDate: checkOut,
    numberOfGuests: 2,
    bookingDate: new Date(),
    totalPrice: 1000,
    paymentStatus: 'Unpaid',
    bookingStatus: 'Pending',
    bookingId: 5,
  });
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleUserInfoChange = (name, value) => {
    setData({...data, userInfo: {...data.userInfo, [name]: value}});
  };
  const handleBooking = () => {
    setLoading(true);
    postApi('/api/bookings', data)
      .then(res => {
        if (res.status === 201) {
          setLoading(false);
          navigation.navigate('BookingConfirm', {bookingId: 5});
        } else {
          console.log(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.reviewBookingContainer}>
        <TopNav />
        {/* <ScrollView> */}
        <View style={styles.reviewBookingContainerHeader}>
          <Text style={styles.reviewBookingContainerHeaderText}>
            Review Booking
          </Text>
          <View style={styles.hr}></View>
        </View>
        {/* Both cards container  */}
        <View style={styles.reviewBookingContainerMain}>
          {/* first card  */}
          <View style={styles.roomInfoContainer}>
            {/* card left container  */}
            <View style={styles.roomInfo}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
                Sina Suit
              </Text>
              <Text style={{fontSize: 12, color: 'black', width: '80%'}}>
                Government rest house Ahmednagar
              </Text>
              <Text style={{color: 'black', fontSize: 12, width: '35%'}}>
                Single bed 2
              </Text>
            </View>
            {/* card top image */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.roomImage}
                source={require('../../Images/roomImg.png')}
              />
            </View>
          </View>
          <View style={styles.hrBottom}></View>
          <View style={styles.calenderContainer}>
            <View style={styles.checkInContainer}>
              <Text style={{color: 'black'}}>Check In</Text>
              <Text style={{color: 'black'}}>{checkIn}</Text>
              <Text>12 PM</Text>
            </View>
            <View style={styles.middleContainer}>
              <Text style={{fontSize: 10}}> 1 Night </Text>
            </View>
            <View style={styles.checkOutContainer}>
              <Text style={{color: 'black'}}>Check Out</Text>
              <Text style={{color: 'black', letterSpacing: 0.8}}>
                {checkOut}
              </Text>
              <Text>12 PM</Text>
            </View>
          </View>
          <View style={styles.hrBottom}></View>
          {/* Guests Container  */}
          <Text style={{color: 'black', marginTop: 10}}>Guests & Rooms</Text>
          <View style={styles.guestsContainer}>
            <Text style={{color: 'black'}}>2 Adults</Text>
            <Text style={{color: 'black'}}>•</Text>
            <Text style={{color: 'black'}}>1 Room</Text>
          </View>
        </View>

        {/* second card  */}

        <View style={styles.formCard}>
          <Text style={{color: 'black'}}>Guest Information</Text>
          <View style={styles.nameContainer}>
            <View style={styles.inputLabel}>
              <Text
                style={{padding: 0, margin: 0, marginLeft: 10, marginTop: 5}}>
                First Name
              </Text>
              <TextInput
                onChangeText={text => handleUserInfoChange('firstName', text)}
                value={data.userInfo.firstName}
                style={{margin: 0, fontSize: 16, padding: 4}}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text
                style={{padding: 0, margin: 0, marginLeft: 10, marginTop: 5}}>
                Last Name
              </Text>
              <TextInput
                onChangeText={text => handleUserInfoChange('lastName', text)}
                value={data.userInfo.lastName}
                style={{margin: 0, fontSize: 16, padding: 4}}
              />
            </View>
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.inputLabelEmail}>
              <Text
                style={{padding: 0, margin: 0, marginLeft: 10, marginTop: 5}}>
                Email ID
              </Text>
              <TextInput
                onChangeText={text => handleUserInfoChange('email', text)}
                value={data.userInfo.email}
                style={{margin: 0, fontSize: 16, padding: 4}}
              />
            </View>
          </View>
          <View style={styles.contactContainer}>
            <View style={styles.inputLabelContact}>
              <Text
                style={{padding: 0, margin: 0, marginLeft: 10, marginTop: 5}}>
                Contact Number
              </Text>
              <TextInput
                onChangeText={text =>
                  handleUserInfoChange('contactNumber', text)
                }
                value={data.userInfo.contactNumber}
                style={{margin: 0, fontSize: 16, padding: 4}}
              />
            </View>
          </View>
        </View>
        {/* </ScrollView> */}

        {/* footer  */}

        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.priceFooter}>₹1000</Text>
            <Text style={styles.priceBottomNote}>Incl of all taxes</Text>
          </View>
          <Button
            // onPress={handleBooking}

            disabled={
              data.userInfo.firstName === ' ' ||
              data.userInfo.lastName === ' ' ||
              data.userInfo.email === ' ' ||
              data.userInfo.contactNumber === ' '
                ? true
                : false
            }
            onPress={() => {
              setModalVisible(true);
              // var options = {
              //   description: 'Room Booking Payment',
              //   image: {pwdImg},
              //   currency: 'INR',
              //   key: 'rzp_test_YgvPG4xQukV3HB',
              //   amount: '100000',
              //   name: 'Government Rest House, Ahmednagar',
              //   order_id: '', //Replace this with an order_id created using Orders API.
              //   prefill: {
              //     email: `${data.userInfo.email}`,
              //     contact: `${data.userInfo.contactNumber}`,
              //     name: `${data.userInfo.firstName} ${data.userInfo.lastName}`,
              //   },
              //   theme: {color: '#53a20e'},
              // };
              // RazorpayCheckout.open(options)
              //   .then(data => {
              //     // handle success
              //     // alert(`Success: ${data.razorpay_payment_id}`);
              //     alert('Payment Successful');
              //     // handleBooking();
              //     // navigation.navigate('BookingSlip', {bookingId: 5})
              //   })
              //   .catch(error => {
              //     // handle failure
              //     console.log(error);
              //     alert(`Error: ${error.code} | ${error.description}`);
              //   });
            }}
            containerStyle={styles.bookButton}
            title="Book now"
          />
        </View>
        {loading && <Loader />}
      </View>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalMessageContainer}>
          <View style={{display: 'flex', flexDirection: 'row',gap:5}}>
            <Text style={styles.modalMainMessage}>
              Bookings will open soon!
            </Text>
          </View>
          <View style={styles.animationContainer}>
            <LottieView
              source={require('../../assets/animation/coming-soon.json')}
              autoPlay
              style={{height: height / 3}}
            />
          </View>
          <View style={styles.redirectContainer}>
            <View style={styles.redirectToHome}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text style={{padding: 10, color: 'white'}}>Go to homepage</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default ReviewBooking;
