import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bookingConfirmationContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: '#F4F4F4'
    },
    iconBackground: {
        backgroundColor: '#1DA933',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 50,
        margin: 20,
        marginBottom: 50
    },
    lowerContainer: {
        borderWidth: 2,
        borderColor: '#E2E2E2',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        marginTop: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    lowerContainerHeader: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20,
    },
})

export default styles;