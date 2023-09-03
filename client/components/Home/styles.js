import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  topLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pwdLogoImg: {
    width: 70,
    height: 70,
    alignSelf: 'flex-start',
    flexBasis: '30%',
    objectFit: 'contain',
    padding: 5,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  accoutCircleContainer: {
    flexBasis: '50%',
    alignItems: 'flex-end',
    padding: 15,
  },
  searchBarContainer: {
    borderWidth: 2,
    width: '80%',
    alignSelf: 'center',
    padding: 3,
    marginTop: 5,
    borderRadius: 10,
    borderColor: '#8B8B8B',
    backgroundColor: '#E8E8E8',
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    padding: 15,
    marginTop: 7,
    marginLeft: 5,
    color: '#6A6A6A',
  },
  searchBar: {
    marginLeft: 5,
    flex: 1,
    fontSize: 16,
  },
});

export default styles;
