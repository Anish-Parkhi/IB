import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
  },
  profileDetailsHeader: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  routeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  routeText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
    padding: 14,
  },
  underline: {
    width: '100%',
    alignSelf: 'center',
    height: 1.5,
    backgroundColor: '#747474',
    margin: 5,
    marginTop: 0,
  },
  accoutinnerContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'left',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    marginTop: 30,
  },
});

export default styles;
