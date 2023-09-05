import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  reviewBookingContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  reviewBookingContainerMain: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    borderRadius: 10,
  },
  roomInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  roomInfo: {
    flexBasis: '60%',
  },
  imageContainer: {
    width: '40%',
    alignItems: 'flex-end',
  },
  roomImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  reviewBookingContainerHeader: {
    width: '90%',
    alignItems: 'left',
    alignSelf: 'center',
  },
  reviewBookingContainerHeaderText: {
    color: 'black',
    fontSize: 20,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '34%',
    marginTop: 5,
    marginBottom: 5,
  },

  calenderContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkOutContainer: {
    alignItems: 'flex-end',
  },
  middleContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    borderColor: '#E2E2E2',
    borderWidth: 1,
  },
  hrBottom: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#B4B4B4',
    height: 1,
    marginTop: 10,
  },
  guestsContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  formCard: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    alignContent: 'center',
  },
  // firstNameContainer: {
  //   width: '40%',
  //   borderWidth: 1,
  //   borderColor: '#E2E2E2',
  //   backgroundColor: '#E2E2E2',
  // },
  inputLabel: {
    width: '48%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#E2E2E2',
    borderRadius: 12
  },
  emailContainer:{
    width:'100%',
    alignSelf: 'center'
  },
  inputLabelEmail:{
    width: '98%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#E2E2E2',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 10
  },
  inputLabelContact:{
    width: '98%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#E2E2E2',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 10
  },
  footerContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceFooter: {
    color: 'white',
    marginLeft: 5,
    fontSize: 20,
  },
  priceBottomNote:{
    color: 'white',
    marginLeft: 5,
    fontSize: 12,
  },
  bookButton:{
    width: '50%',
  }
});

export default styles;