import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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
})

export default styles;