import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cardMainContainer: {
        borderWidth: 2,
        width: '90%',
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        borderColor: '#F4F4F4'
    },
    bottomContainer: {
        borderColor: '#E2E2E2',
        padding: 10,
    },
    suitName: {
        fontSize: 23,
        color: '#0027B2',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
        color :'black',
    },
    roomInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: "#E7FFDB",
        padding: 5,
        borderRadius: 10,
        paddingLeft: 15
    },
    roomImage: {
        objectFit: 'cover',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 0,
        height: 200,
    },
    roomAccomodationContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        gap: 9,
        alignItems: "center",
    },
    bedInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 9,
    },
    accomodation: {
        fontSize: 12
    },
    bedInfo: {
        fontSize: 12
    },
    bedInfoNumber: {
        fontSize: 12
    },
    availableText:{
        marginTop: 12,
        color:  '#1DA933'
    },
    notAvailableText:{
        marginTop: 12,
        color:  '#FF0000'
    },
    availableContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    availAbleIcon: {
        marginTop: 10,
        marginLeft: 5,
    }
})

export default styles;