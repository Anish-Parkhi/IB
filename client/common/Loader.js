import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './loaderStyles.js';
const loader = () => {
  return <ActivityIndicator size={'large'} style={styles.loader} />;
};

export default loader;
