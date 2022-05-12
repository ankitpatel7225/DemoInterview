import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import React from 'react';
import fontfamily from '../../utils/fontfamily';
import color from '../../utils/color';
import Button from '../Button';
import {suggestions} from '../../screen/Home/Dashboard/interface';

interface propType {
  item: suggestions;
  index: number;
  showAddButton?: boolean;
  buttonText?: string;
  showViewProfile?: boolean;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}
const FriendCard: React.FC<propType> = props => {
  return (
    <View style={[style.container, props.containerStyle]}>
      <Image
        source={
          props.item.image
            ? props.item.image
            : require('../../assets/image/Avatar.png')
        }
        style={style.userImageContainer}
      />
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text style={style.nameText}>{props.item.name}</Text>
        {props.showViewProfile && (
          <Text style={style.viewProfileText}>View profile</Text>
        )}
      </View>
      {props.showAddButton && (
        <Button
          name={props.buttonText}
          containerStyle={style.addButton}
          nameTextStyle={style.addText}
        />
      )}
    </View>
  );
};

FriendCard.defaultProps = {
  showViewProfile: true,
};
export default FriendCard;

const style = StyleSheet.create({
  container: {
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomColor: color.googleButton,
  },
  userImageContainer: {
    width: 38,
    height: 38,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  nameText: {
    fontSize: 16,
    fontFamily: fontfamily.montserratSemiBold,
    lineHeight: 19,
    color: color.blackText,
  },
  viewProfileText: {
    fontSize: 10,
    fontFamily: fontfamily.montserratRegular,
    lineHeight: 18,
    color: color.primary,
    marginTop: 4,
  },
  addButton: {
    width: 93,
    height: 34,
    borderRadius: 5,
  },
  addText: {
    fontSize: 14,
    fontFamily: fontfamily.montserratRegular,
    lineHeight: 22,
    textTransform: 'none',
  },
});
