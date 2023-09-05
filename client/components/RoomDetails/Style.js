import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    roomInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 3,
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
        borderColor: 'grey',
    },
    imgContainer: {
        width: '100%',
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
        marginBottom: 10,
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
    },
    amrnitiesMainContainer:{ 
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    iconBottomText: {
        fontSize: 12,
        color: 'black'
    },
    iconBackground: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'black',
    },
    logo: {
        width: '40%',
        objectFit: 'contain'
    },
    rulesDescription: {
        color: 'black'
    },
    rulesList: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
        gap: 5,
    },
    rulesContainerHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    rulesContainer: {
        marginTop: 10,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    bookingButton: {
        width: "40%",
    },
    availableContainer:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    availableContainerText: {
        color: '#1DA933'
    },
    roomImage: {
        width: '100%',
        objectFit: 'cover'
    }
})

export default styles;