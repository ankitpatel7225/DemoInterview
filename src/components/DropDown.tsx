import React, {useState, memo} from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
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
  lableStyle?: StyleProp<TextStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  inputViewStyle?: StyleProp<ViewStyle> | undefined;
  error?: string;
  value: object;
  onSelectItem: (item: any) => void;
  displayKey: string;
  data: Array<object>;
};

interface renderFlatList {
  item: any;
  index: number;
  length: number;
}

const DropDown = (props: propType) => {
  const [openDropDown, setopenDropDown] = useState<boolean>(false);
  const RenderFlatlistItem = (innerProps: renderFlatList) => {
    return (
      <TouchableOpacity
        style={[
          style.renderRowView,
          {
            borderBottomWidth: innerProps.length == innerProps.index ? 0 : 1,
          },
        ]}
        activeOpacity={0.7}
        onPress={() => {
          props.onSelectItem(innerProps.item);
          setopenDropDown(!openDropDown);
        }}>
        <Text style={{color: 'black'}}>
          {innerProps.item[props.displayKey]}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[style.container, props.containerStyle]}>
      {props.lable && (
        <Text style={[style.lableText, props.lableStyle]}>{props.lable}</Text>
      )}
      <TouchableOpacity
        style={[style.rowView, props.inputViewStyle]}
        activeOpacity={0.7}
        onPress={() => {
          setopenDropDown(!openDropDown);
        }}>
        <Text style={style.textInput}>{props.value[props.displayKey]}</Text>
        <SvgIcon.BackArrow
          style={{transform: [{rotate: '-90deg'}], marginHorizontal: 17}}
        />
      </TouchableOpacity>
      {openDropDown && (
        <FlatList
          data={props.data}
          style={style.flatListStyle}
          nestedScrollEnabled
          renderItem={({item, index}) => (
            <RenderFlatlistItem
              item={item}
              index={index}
              length={props.data.length - 1}
            />
          )}
        />
      )}
      {props.error && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
};
DropDown.defualtProps = {
  displayKey: 'name',
  error: null,
};
export default memo(DropDown);

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
    height: 50,
    borderRadius: 10,
    backgroundColor: color.inputBack,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: color.lightBlack,
    paddingLeft: 25,
    paddingRight: 10,
    fontFamily: fontfamily.montserratBold,
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
  },
  flatListStyle: {
    backgroundColor: color.inputBack,
    marginTop: 5,
    borderRadius: 10,
    maxHeight: 200,
  },
  renderRowView: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomWidth: 0.8,
    borderBottomColor: color.googleButton,
  },
});