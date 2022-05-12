import {StyleSheet} from 'react-native';
import color from '../../../utils/color';
import fontfamily from '../../../utils/fontfamily';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  secondView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  getStatedText: {
    color: color.white,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 36,
    textAlign: 'center',
    fontFamily: fontfamily.montserratSemiBold,
  },
  buttonContainer: {
    marginHorizontal: 48,
    marginBottom: 18,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: color.secondPrimary,
  },
  googleButton: {
    backgroundColor: color.white,
  },
});
