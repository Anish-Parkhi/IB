import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginBottom: 20, 
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
    width: '90%',
    alignSelf: 'center',
    padding: 3,
    marginTop: 5,
    borderRadius: 10,
    borderColor: '#8B8B8B',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.5
  },
  searchIcon: {
    marginLeft: 5,
    color: '#6A6A6A',
  },
  searchIconContainer: {
    alignSelf: 'center',
  },
  searchBar: {
    marginLeft: 5,
    flex: 1,
    fontSize: 16,
  },
  selectDatesContainer: {
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    padding: 3,
    marginTop: 5,
    borderRadius: 10,
    borderColor: '#8B8B8B',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5
  },
  selectDatesMainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  selectDatesStartContainer: {
    flexBasis: '50%',
    padding: 10,
  },
  selectDatesStartText: {
    color: 'black',
    fontSize: 13,
  },
  selectDatesEndText: {
    color: 'black',
    fontSize: 13,
  },
  selectDatesEndContainer: {
    flexBasis: '50%',
    padding: 10
  },
  selectDatesStartTextHead: {
    fontSize: 11
  },
  selectDatesEndTextHead: {
    fontSize: 11
  },
  calenderContainer: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#8B8B8B',
  },
  closeIcon: {
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  noDataContainer: {
    height: 580,
    flex: 1,
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1a2c47',
    fontWeight: 'bold',
    marginBottom: 150
  }
});

export default styles;
