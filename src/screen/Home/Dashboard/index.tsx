import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {dashboardProp, suggestions} from './interface';
import CustomStatusBar from '../../../components/CustomStatusBar';
import Header from '../../../components/Header';
import SvgIcon from '../../../assets/SvgIcon';
import {useState} from 'react';
import FriendCard from '../../../components/card/FriendCard';

const DashBoard: React.FC<dashboardProp> = props => {
  const [data, setData] = useState<Array<suggestions>>([
    {
      id: 1,
      name: 'Calvin M.',
      image: null,
    },
    {
      id: 2,
      name: 'Jennifer O.',
      image: null,
    },
    {
      id: 3,
      name: 'Lawrence C.',
      image: null,
    },
    {
      id: 4,
      name: 'Nolan L.',
      image: null,
    },
    {
      id: 5,
      name: 'Viv M.',
      image: null,
    },
  ]);
  return (
    <View style={style.container}>
      <CustomStatusBar />
      <Header
        centerName="Dashboard"
        headerCenterLogo={SvgIcon.LogoHeader}
        leftIcon={SvgIcon.Menu}
        rightIcon={SvgIcon.BackArrow}
        isText={true}
        onLeftIconClick={() => props.navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <FriendCard
            item={item}
            index={index}
            showAddButton={false}
            buttonText="Add"
            showViewProfile={false}
            containerStyle={[
              style.cardStyle,
              {borderBottomWidth: index == data.length - 1 ? 0 : 1},
            ]}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DashBoard;
