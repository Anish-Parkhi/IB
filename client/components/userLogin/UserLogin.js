import {useNavigation} from '@react-navigation/native';
import {Button, Input} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loader from '../../common/Loader';
import {postApi} from '../../utils/baseApi/api';
import styles from './styles';

export default function UserLogin() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    emailId: '',
    password: '',
  });
  const navigation = useNavigation();
  const redirectToRegister = () => {
    navigation.navigate('UserRegistration');
  };
  const handleChange = (name, value) => {
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = () => {
    setLoading(true);
    postApi('/api/login', data)
      .then(res => {
        if (res.status === 200) {
          setLoading(false);
          navigation.navigate('Home');
        } else if (res.status === 404) {
          Alert.alert('Invalid Credentials');
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  console.log(data);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../Images/accountbg.png')}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Login</Text>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Name</Text>
          <Input
            style={styles.inputBarStyle}
            onChangeText={value => setName(value)}
            inputContainerStyle={{borderBottomWidth: 0}}
            value={data.name}
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Email</Text>
          <Input
            style={styles.inputBarStyle}
            onChangeText={value => handleChange('emailId', value)}
            inputContainerStyle={{borderBottomWidth: 0}}
            value={data.emailId}
          />
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.labelText}>Password</Text>
          <Input
            style={styles.inputBarStyle}
            onChangeText={value => handleChange('password', value)}
            inputContainerStyle={{borderBottomWidth: 0}}
            value={data.password}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleFormSubmit}
            title="Log In"
            style={styles.submitBtn}
            containerStyle={{borderRadius: 5, width: 150, padding: 2}}></Button>
        </View>

        <TouchableOpacity
          style={styles.regiterNowContainer}
          onPress={redirectToRegister}>
          <Text style={styles.registerNowText}>New User? Register Now</Text>
        </TouchableOpacity>
        {loading && <Loader />}
      </View>
    </ImageBackground>
  );
}
