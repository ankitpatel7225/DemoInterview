import React, {memo} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import color from '../utils/color';
import fontfamily from '../utils/fontfamily';

interface propType {
  name: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void;
  buttonProps?: TouchableOpacityProps;
}
const Button: React.FC<propType> = props => {
  return (
    <TouchableOpacity
      style={[style.container, props.containerStyle]}
      activeOpacity={0.7}
      onPress={props.onPress}
      disabled={props.isLoading}
      {...props.buttonProps}>
      {props.isLoading ? (
        <ActivityIndicator
          size="small"
          color={color.white}
          style={{marginRight: 10}}
          {...props.activityProps}
        />
      ):<Text style={[style.nameStyle, props.nameTextStyle]}>{props.name}</Text>}
    </TouchableOpacity>
  );
};

export default memo(Button);
Button.defaultProps = {
  isLoading: false,
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    backgroundColor: color.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: color.white,
    lineHeight: 24,
    textTransform: 'uppercase',
    fontFamily: fontfamily.montserratSemiBold,
  },
});
