import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
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

const Home = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [selectedEndDate, setSelectedEndDate] = useState(tomorrow);
  const [openCalendar, setOpenCalendar] = useState(false);
  console.log(selectedStartDate, selectedEndDate);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  useEffect(() => {
    setLoading(true);
    getApi('/api/rooms')
      .then(res => {
        setRoomData(res.data);
        console.log(res.status);
        if (res.status === 200) {
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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

  //filtered room data
  const [filteredData, setFilteredData] = useState(roomData?.response);
  const filteredRoomData = () => {
    if (!search) {
      setFilteredData([]);
    } else {
      const filteredItems = roomData?.response?.filter(item => {
        if (item?.roomName.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });
      setFilteredData(filteredItems);
    }
  };

  return (
    <ScrollView style={styles.homeMainContainer}>
      <ImageBackground source={require('../../Images/accountbg.png')}>
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
            value={search}
            onChangeText={value => setSearch(value)}
            returnKeyType="done"
            onSubmitEditing={filteredRoomData}
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
                maxDate={new Date(2050, 6, 3)}
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

        {roomData?.response?.map((item, index) => {
          console.log(item.bookedDates);
          return (
            <Card
              formattedStartDate={formattedStartDate}
              formattedEndDate={formattedEndDate}
              isRoomAvailable={availabilityStatusList[index]}
              key={index}
              data={item}
            />
          );
        })}

        {/* Loader  */}
        {loading && <Loader />}
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;
