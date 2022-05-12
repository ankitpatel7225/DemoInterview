import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenName from '../../utils/screenName';
import GetStated from '../../screen/Auth/GetStared';
import SignUp from '../../screen/Auth/SignUp';
import Login from '../../screen/Auth/Login';
import DrawerNavigation from '../drawer/DrawerNavigation';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/redux/rootReducer';
export type AuthStackParamList = {
  getStart: undefined;
  signUp: undefined;
  login: undefined;
  myProfile: undefined;
  main: undefined;
  dashBoard: undefined;
};
const Stack = createStackNavigator();

const AuthStack = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const initRoute = () => {
    if (user?.isLogin) {
      return screenName.main;
    } else {
      return screenName.getStart;
    }
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initRoute()}>
      <Stack.Screen name={screenName.getStart} component={GetStated} />
      <Stack.Screen name={screenName.signUp} component={SignUp} />
      <Stack.Screen name={screenName.login} component={Login} />
      <Stack.Screen name={screenName.main} component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default AuthStack;
