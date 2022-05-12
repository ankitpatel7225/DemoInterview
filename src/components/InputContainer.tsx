import React, {useRef, useState, memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import SvgIcon from '../assets/SvgIcon';
import color from '../utils/color';
import fontfamily from '../utils/fontfamily';

type propType = {
  lable?: string;
  setValue: (value: string) => void;
  inputValue: string;
  lableStyle?: StyleProp<TextStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  inputViewStyle?: StyleProp<ViewStyle> | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
  inputProps?: TextInputProps;
  hideText?: Boolean;
  secureText: boolean;
  error?: String;
};

const InputContainer = (props: propType) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(
    props.secureText,
  );

  return (
    <View style={[style.container, props.containerStyle]}>
      {props.lable != '' && props.lable && (
        <Text style={[style.lableText, props.lableStyle]}>{props.lable}</Text>
      )}
      <View style={[style.rowView, props.inputViewStyle]}>
        <TextInput
          style={[style.textInput, props.inputStyle]}
          value={props.inputValue}
          onChangeText={props.setValue}
          selectionColor="rgba(0,0,0,0.5)"
          placeholderTextColor="#464646"
          secureTextEntry={passwordVisible}
          {...props?.inputProps}
        />
        {props.hideText && (
          <TouchableOpacity
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}
            activeOpacity={0.5}
            style={style.imageButton}>
            {passwordVisible ? (
              <SvgIcon.PasswordInvisiable />
            ) : (
              <SvgIcon.PasswordVisiable />
            )}
          </TouchableOpacity>
        )}
      </View>
      {props.error && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
};
InputContainer.defualtProps = {
  hideText: false,
  secureText: false,
  error: null,
};
export default memo(InputContainer);

const style = StyleSheet.create({
  container: {},
  lableText: {
    fontSize: 14,
    color: color.lightBlack,
    marginBottom: 9,
    lineHeight: 24,
    fontFamily: fontfamily.montserratMedium,
  },
  leftIcon: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: 20,
  },
  rowView: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 10,
    backgroundColor: color.inputBack,
  },
  textInput: {
    flex: 1,
    color: color.lightBlack,
    paddingVertical: 0,
    height: '100%',
    paddingLeft: 25,
    paddingRight: 10,
    fontFamily: fontfamily.montserratBold,
    backgroundColor: color.inputBack,
    borderRadius: 10,
  },
  imageButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
  },
  error: {
    fontSize: 12,
    color: color.red,
    marginTop: 5,
    fontFamily: 'Gotham-Book',
  },
});
