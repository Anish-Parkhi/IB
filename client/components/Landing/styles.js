import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  landingMainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  landingPageImage: {
    height: 250,
    width: 250,
    borderRadius: 15,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 2,
    marginBottom: 10,
  },
  loginSignInContiner: {
    marginTop: 20,
    padding: 10,
  },
  buttonContainer: {
    width: 140,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: 30,
    margin: 20,
  },
  landingContainerLogin: {
    color: 'white',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
  },
  landingContainerSignUp: {
    color: 'white',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  hr: {
    borderWidth: 1,
    width: 40,
    height: 1,
    backgroundColor: 'grey',
    marginTop: 12,
  },
});

export default styles;
