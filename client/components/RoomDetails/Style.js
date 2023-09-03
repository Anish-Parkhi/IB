import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    roomInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
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
        fontSize: 12,
        color: 'black'
    },
    bedInfo: {
        fontSize: 12,
        color: 'black'
    },
    bedInfoNumber: {
        fontSize: 12,
        color: 'black'
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
    },
    roomDetailsContainer: {
        borderWidth: 2,
        width: '90%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 10,
    },
    imgContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'grey',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomMainContainer : {
        padding: 10,
    },
    roomNameContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    roomName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    roomDescription :{
        fontSize: 12,
        color: 'black',
    },
    amenitiesContainer:{
         marginTop: 10,
    },
    amenitiesContainerHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default styles;