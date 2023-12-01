import {faCloud, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Button, Input} from '@rneui/themed';
import RadioButtonRN from 'radio-buttons-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Loader from '../../../common/Loader';
import {postApi} from '../../../utils/baseApi/api';
import styles from './styles';

const optionsData = [
  {
    label: 'Government Official',
  },
  {
    label: 'Non Government',
  },
];

export default function UserRegistration() {
  const navigation = useNavigation();

  const redirectToLogin = () => {
    navigation.navigate('UserLogin');
  };
  // const user = useUserContext();
  // console.log(user);

  //image picking mechanism
  const [imageUrl, setImageUrl] = useState('');
  const openCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      const source = {uri: 'data:image/jpeg;base64,' + response.base64};
      setImageUrl(source);
    });
  };

  //state for storing info for backend

  const [data, setData] = useState({
    name: '',
    phoneNumber: '',
    emailId: '',
    // Imgname: '',
    // govIdImage: '',
    designation: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setData(prevDate => ({
      ...prevDate,
      [name]: value,
    }));
  };

  //state to open or close modal
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data.designation === 'Government Official') {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [data.designation]);

  const submitForm = () => {
    setLoading(true);
    postApi('/api/user', data)
      .then(res => {
        setLoading(false);
        console.log(`Request successful`, res);
        Alert.alert('Registration Successful');
        navigation.navigate('UserLogin');
      })
      .catch(err => {
        console.log(`Some error is coming`, err);
      });
  };

  const [loading, setLoading] = useState(false);
  const [cnfPassWord, setCnfPassWord] = useState('');
  const isValidEmail = () => {
    const regEx = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return regEx.test(data.emailId);
  };

  return (
    <ScrollView
      style={[
        styles.mainContainer,
        modalVisible === true ? styles.blurBG : null,
      ]}>
      {/* loader */}
      <ImageBackground
        style={{flex: 1}}
        blurRadius={modalVisible === 'true' ? 1 : 0}
        source={require('../../../Images/accountbg.png')}>
        <Text style={styles.mainHeader}>Register Yourself</Text>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Name</Text>
          <Input
            style={styles.inputBarStyle}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={value => handleChange('name', value)}
            value={data.name}
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Email</Text>
          <Input
            style={styles.inputBarStyle}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={value => handleChange('emailId', value)}
            value={data.emailId}
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Phone Number</Text>
          <Input
            maxLength={10}
            style={styles.inputBarStyle}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={value => handleChange('phoneNumber', value)}
            value={data.phoneNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Password</Text>
          <Input
            style={styles.inputBarStyle}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={value => handleChange('password', value)}
            value={data.password}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Confirm Password</Text>
          <Input
            style={styles.inputBarStyle}
            inputContainerStyle={{borderBottomWidth: 0}}
            secureTextEntry={true}
            onChangeText={text => {
              setCnfPassWord(text);
            }}
          />
        </View>

        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Designation</Text>
          <RadioButtonRN
            style={styles.radioBtn}
            data={optionsData}
            selectedBtn={e => {
              handleChange('designation', e.label);
            }}
          />
        </View>

        {/* Modal */}
        <Modal
          animationType="slide"
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
          style={styles.modalContainer}
          visible={modalVisible}>
          <Pressable
            style={styles.closeModalContainer}
            onPress={() => setModalVisible(false)}>
            <FontAwesomeIcon
              size={25}
              style={styles.closeIconModal}
              icon={faTimes}
            />
          </Pressable>
          <View style={styles.modalInnerTextContainer}>
            <Text style={[styles.modalInnerText, styles.modalInnerTextHeader]}>
              Government Identification
            </Text>
            <Text style={styles.modalInnerText}>
              Upload your government issued employee ID:
            </Text>
            <TouchableOpacity
              style={styles.uploadImageInnerContainer}
              onPress={() => {
                openCamera();
              }}>
              <FontAwesomeIcon size={40} icon={faCloud} />
              <Text>Click to Upload</Text>
            </TouchableOpacity>
            <Image source={imageUrl} />
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.submitBtn}
            onPress={submitForm}
            title="Sign Up"
            containerStyle={{borderRadius: 5, width: 150, padding: 2}}
            disabled={
              cnfPassWord === data.password &&
              data.name !== '' &&
              isValidEmail() &&
              data.phoneNumber !== '' &&
              data.password !== '' &&
              data.designation !== ''
                ? false
                : true
            }
          />
          <TouchableOpacity
            onPress={redirectToLogin}
            style={styles.redirectToLogin}>
            <Text>Already have an account ?</Text>
          </TouchableOpacity>
        </View>
        {loading && <Loader />}
      </ImageBackground>
    </ScrollView>
  );
}
