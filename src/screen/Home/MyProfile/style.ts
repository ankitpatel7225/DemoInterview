import {StyleSheet} from 'react-native';
import color from '../../../utils/color';
import fontfamily from '../../../utils/fontfamily';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageContainer: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginTop: 15,
  },
  imageStyle: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  personalDetailText: {
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: fontfamily.montserratBold,
    lineHeight: 24,
    color: color.blackText,
    marginTop: 31,
    marginBottom: 10,
  },
  titleText: {
    fontFamily: fontfamily.montserratMedium,
    fontSize: 14,
    lineHeight: 24,
    color: color.grayText,
    marginHorizontal: 15,
  },
  detailText: {
    fontFamily: fontfamily.montserratSemiBold,
    fontSize: 16,
    lineHeight: 24,
    color: color.lightBlack,
    marginHorizontal: 15,
  },
  borderView: {
    paddingVertical: 15,
    borderTopColor: color.googleButton,
    borderTopWidth: 1,
  },
});