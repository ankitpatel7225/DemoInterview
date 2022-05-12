import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {myProfileProp} from './interface';
import CustomStatusBar from '../../../components/CustomStatusBar';
import Header from '../../../components/Header';
import SvgIcon from '../../../assets/SvgIcon';
import {style} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '../../../services/redux/rootReducer';
import SplashScreen from 'react-native-splash-screen';

const MyProfile: React.FC<myProfileProp> = props => {
  const user = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={style.container}>
      <CustomStatusBar />
      <Header
        centerName="MY PROFILE"
        headerCenterLogo={SvgIcon.LogoHeader}
        leftIcon={SvgIcon.Menu}
        rightIcon={SvgIcon.BackArrow}
        isText={true}
        onLeftIconClick={() => props.navigation.openDrawer()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Text style={style.personalDetailText}>PERSONAL DETAILS</Text>
        <Text style={style.titleText}>Name</Text>
        <Text style={[style.detailText, {marginBottom: 10}]}>
          {user?.user?.firstName} {user?.user?.lastName}
        </Text>
        <View style={style.borderView}>
          <Text style={style.titleText}>email</Text>
          <Text style={style.detailText}>{user?.user?.email}</Text>
        </View>
        <View style={style.borderView}>
          <Text style={style.titleText}>Gender</Text>
          <Text style={style.detailText}>{user?.user?.gender}</Text>
        </View>
        <View style={style.borderView}>
          <Text style={style.titleText}>Hobbies</Text>
          <Text style={style.detailText}>{user?.user?.hobbies}</Text>
        </View>
        <View style={style.borderView}>
          <Text style={style.titleText}>Address</Text>
          <Text style={style.detailText}>{user?.user?.address}</Text>
        </View>
        <View style={style.borderView}>
          <Text style={style.titleText}>State</Text>
          <Text style={style.detailText}>{user?.user?.state}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;
