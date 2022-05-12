import {StyleSheet} from 'react-native';
import color from '../../../utils/color';
import fontfamily from '../../../utils/fontfamily';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fontfamily.montserratBold,
    color: color.primary,
    lineHeight: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20,
  },
  messageText: {
    fontSize: 14,
    fontFamily: fontfamily.montserratRegular,
    color: color.lightBlack,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 25,
  },
  signUpRowView: {
    flex:1,
    flexDirection: 'row',
    marginTop: 89,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  dontHaveText: {
    fontFamily: fontfamily.montserratRegular,
    fontSize: 14,
    color: color.lightBlack,
    lineHeight: 24,
  },
  signUpText: {
    fontFamily: fontfamily.montserratBold,
    fontSize: 14,
    color: color.primary,
    lineHeight: 24,
  },
});
