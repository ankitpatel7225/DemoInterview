import React, {memo} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import fontfamily from '../utils/fontfamily';


type propType = {
  message: String,
  textStyle?: StyleProp<TextStyle> | undefined,
};

const ErrorMessage:React.FC<propType> = (props) => {
  return (
    props.message && (
      <Text style={[localStyle.errorMessage, props.textStyle]}>
        {props.message}
      </Text>
    )
  );
};

export default memo(ErrorMessage);

const localStyle = StyleSheet.create({
  errorMessage: {
    fontSize: 12,
    color: '#eb0028',
    fontFamily: fontfamily.montserratRegular,
    marginTop: 10,
  },
})