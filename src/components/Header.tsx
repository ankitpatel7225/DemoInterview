import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Svgicon from '../assets/SvgIcon';
import color from '../utils/color';
import fontfamily from '../utils/fontfamily';

interface propType {
  headerCenterLogo: React.ComponentType;
  leftIcon: React.ComponentType;
  rightIcon: React.ComponentType;
  centerName?: string;
  headerTextStyle?: StyleProp<TextStyle> | undefined;
  leftButtonStyle?: StyleProp<ViewStyle> | undefined;
  onLeftIconClick?: () => void;
  rightIconClick?: () => void;
  isText?: boolean;
  rightText?: string;
}

const Header: React.FC<propType> = props => {
  return (
    <View style={style.containerStyle}>
      <View style={style.rowView}>
        <View style={style.headerCenterView}>
          {props.centerName ? (
            <Text style={[style.hearderName, props.headerTextStyle]}>
              {props.centerName}
            </Text>
          ) : (
            <props.headerCenterLogo />
          )}
        </View>
        <TouchableOpacity
          style={[style.leftButtonStyle, props.leftButtonStyle]}
          activeOpacity={0.7}
          onPress={props.onLeftIconClick}>
          <props.leftIcon />
        </TouchableOpacity>
        <View style={style.rightView}>
          {props.isText ? (
            <TouchableOpacity
              style={[style.rightButton]}
              activeOpacity={0.7}
              onPress={props.rightIconClick}>
              <Text style={style.rightButtonText}>{props.rightText}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[style.rightButton]}
              activeOpacity={0.7}
              onPress={props.rightIconClick}>
              <props.rightIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
Header.defaultProps = {
  headerCenterLogo: Svgicon.LogoHeader,
  leftIcon: Svgicon.BackArrow,
  rightIcon: Svgicon.BackArrow,
  isText: true,
};
const style = StyleSheet.create({
  containerStyle: {
    paddingVertical: 15,
  },
  rowView: {
    flexDirection: 'row',
  },
  headerCenterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  hearderName: {
    fontSize: 16,
    color: color.blackText,
    fontFamily: fontfamily.montserratBold,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  leftButtonStyle: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rightButtonText: {
    fontFamily: fontfamily.montserratSemiBold,
    fontSize: 14,
    color: color.blackText,
    lineHeight: 15,
  },
});
