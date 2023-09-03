import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    height: '100%',
  },
  registrationContainer: {
    width: '100%',
    padding: 3,
  },
  inputField: {
    borderWidth: 1,
    width: '80%',
    borderRadius: 4,
    fontSize: 16,
  },
  mainHeader: {
    padding: 20,
    textAlign: 'left',
    fontSize: 26,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
  },
  labelText: {
    position: 'absolute',
    top: 1,
    color: 'black',
    zIndex: 999,
    backgroundColor: '#f8f8f8',
    left: 28,
    margin: 2,
    fontSize: 16
  },
  inputBarStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    color: 'black',
    opacity: 0.8,
  },
  radioBtn: {
    backgroundColor: 'none',
  },
  buttonContainer: {
    paddingTop: 20,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  uploadImageContainer: {
    textAlign: 'center',
    width: '60%',
    borderWidth: 3,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  modalContainer: {
    backgroundColor: '#E6FFDB',
    maxHeight: '37%',
    marginTop: '50%',
    borderRadius: 15, 
    flex: 1,
  },
  modalInnerText: {
    color: 'black',
    textAlign: 'center',
    padding: 5,
  },
  closeIconModal: {
    fontSize: 50,
    backgroundColor: 'black',
    color: 'white', 
    borderRadius: 50,
    marginRight: 5,
    position: 'absolute',
    top: -30,
    right: 10
  },
  closeModalContainer: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 5,
    position:"relative",
    top: 20,
  },
  modalInnerTextContainer: {
    width: '80%',
    alignSelf: 'center',
    padding: 4,
    textAlign: 'center'
  },
  modalInnerTextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadImageInnerContainer: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  redirectToLogin: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  regiterNowContainer: {
    textAlign: 'center',
    alignSelf: "center",
  },
  registerNowText: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  }
});

export default styles;
