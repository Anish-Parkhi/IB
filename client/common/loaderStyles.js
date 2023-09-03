import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black'
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        zIndex: 999,
      }
})

export default styles;