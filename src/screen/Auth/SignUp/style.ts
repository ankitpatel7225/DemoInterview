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
    marginTop: 25,
    marginHorizontal: 25,
  },
  tAndcMessage: {
    fontSize: 12,
    fontFamily: fontfamily.montserratRegular,
    color: color.lightBlack,
    lineHeight: 24,
    marginLeft: 18,
  },
  checkIcon: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
   lableText: {
    fontSize: 14,
    color: color.lightBlack,
    marginBottom: 9,
    lineHeight: 24,
    fontFamily: fontfamily.montserratMedium,
  },
  genderView:{
    backgroundColor:color.inputBack,
    paddingBottom:15,
    paddingTop:10,
    borderRadius:10,
    justifyContent: 'center',
  
  },
  genderText:{
      fontSize: 14,
    color: color.blackText,
    lineHeight: 24,
    fontFamily: fontfamily.montserratMedium,
    marginLeft:15
  }
});
