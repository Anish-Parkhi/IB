import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accountMainContainer: {
    flex: 1,
  },
  myAccountHeader: {
    paddingTop: 50,
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    marginLeft: 8,
  },
  hr: {
    width: '30%',
    height: 2,
    backgroundColor: 'black',
    marginLeft: 9,
    marginBottom: 20,
  },
  accoutinnerContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'left',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    marginTop: 24,
  },
  routeText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
    padding: 13,
  },
  underline: {
    width: '100%',
    alignSelf: 'center',
    height: 1.5,
    backgroundColor: '#747474',
    margin: 5,
    marginTop: 0,
  },
  routeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: ' 90%',
    alignSelf: 'center',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 100
  },
  verticalRule: {
    backgroundColor: 'black',
    height: 18,
    width: 2,
  }
});

export default styles;
