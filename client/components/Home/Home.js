import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Loader from '../../common/Loader';
import {getApi} from '../../utils/baseApi/api';
import Card from '../Card/Card';
import TopNav from '../TopNav/TopNav';
import styles from './styles';

const height = Dimensions.get('window').height;


import img1 from '../../Images/IB_1.jpg';
import img2 from '../../Images/IB_2.jpg';
import img3 from '../../Images/IB_3.jpg';
import img4 from '../../Images/IB_4.jpg';

const images = [img1, img2, img3, img4];


const Home = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [selectedEndDate, setSelectedEndDate] = useState(tomorrow);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRoomData, setFilteredRoomData] = useState([]);
  const route = useRoute();
  const userInfo = route.params;
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  const filterRooms = () => {
    const filteredItems = roomData?.response?.filter(item => {
      if (searchQuery === '') {
        return item;
      } else {
        return item?.roomName
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
    });
    setFilteredRoomData(filteredItems || []);
  };

  useEffect(() => {
    setLoading(true);
    getApi('/api/rooms')
      .then(res => {
        if (res.status === 200) {
          setLoading(false);
          setRoomData(res.data);
          filterRooms();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    filterRooms();
  }, [searchQuery, roomData]);
  useEffect(() => {
    const backAction = () => {
      if (isFocused) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isFocused]);

  const currentDate = new Date();
  const formattedStartDate = selectedStartDate?.toISOString().split('T')[0];
  const formattedEndDate = selectedEndDate?.toISOString().split('T')[0];
  let isRoomAvailable;
  let availabilityStatusList;
  {
    availabilityStatusList = roomData?.response?.map(item => {
      isRoomAvailable = true;
      item?.bookedDates?.forEach(bookedDate => {
        const date = new Date(bookedDate);
        const midNightStartDate = new Date(selectedStartDate);
        midNightStartDate.setHours(0, 0, 0, 0);
        const midNightEndDate = new Date(selectedEndDate);
        midNightEndDate.setHours(0, 0, 0, 0);
        if (date >= midNightStartDate && date < midNightEndDate) {
          isRoomAvailable = false;
        }
      });
      return isRoomAvailable;
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.homeMainContainer}>
      <ImageBackground
        // style={{height: height}}
        source={require('../../Images/accountbg.png')}>
        <TopNav />
        <View style={styles.searchBarContainer}>
          <View style={styles.searchIconContainer}>
            <FontAwesomeIcon
              style={styles.searchIcon}
              icon={faSearch}
              size={18}
              color="black"
            />
          </View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#000"
            value={searchQuery}
            onChangeText={value => {
              setSearchQuery(value);
            }}
          />
        </View>
        {/* Calendar Picker */}

        <TouchableOpacity
          onPress={() => {
            setOpenCalendar(true);
          }}
          style={styles.selectDatesContainer}>
          <View style={styles.selectDatesMainContainer}>
            <View style={styles.selectDatesStartContainer}>
              <Text style={styles.selectDatesStartTextHead}>Check in</Text>
              <Text style={styles.selectDatesStartText}>
                {selectedStartDate?.toString().slice(0, 15)}
              </Text>
            </View>
            <View style={styles.selectDatesEndContainer}>
              <Text style={styles.selectDatesEndTextHead}>Check Out</Text>
              <Text style={styles.selectDatesEndText}>
                {selectedEndDate?.toString().slice(0, 15)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {openCalendar && (
          <View>
            <TouchableOpacity
              onPress={() => {
                setOpenCalendar(false);
              }}
              style={styles.closeIcon}>
              <FontAwesomeIcon icon={faTimes} />
            </TouchableOpacity>
            <View style={styles.calenderContainer}>
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={currentDate}
                maxDate={
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    0,
                  )
                }
                weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                months={[
                  'January',
                  'Febraury',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ]}
                previousTitle="Previous"
                nextTitle="Next"
                previousTitleStyle={{marginLeft: 20}}
                nextTitleStyle={{marginRight: 20}}
                todayBackgroundColor="#e6ffe6"
                selectedDayColor="#26B0EB"
                selectedDayTextColor="#000000"
                scaleFactor={375}
                textStyle={{
                  fontFamily: 'Cochin',
                  color: '#000000',
                }}
                onDateChange={onDateChange}
              />
            </View>
          </View>
        )}

        {/* CARD COMPONENT */}

        {filteredRoomData?.map((item, index) => {
          return (
            <Card
              formattedStartDate={formattedStartDate}
              formattedEndDate={formattedEndDate}
              isRoomAvailable={availabilityStatusList[index]}
              key={index}
              data={item}
              images={images[index % 4]} 
            />
          );
        })}

        {filteredRoomData?.length === 0 && (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No Rooms Found</Text>
          </View>
        )}

        {/* Loader  */}
        {loading && <Loader />}
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;
