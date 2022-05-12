import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import MyProfile from '../../screen/Home/MyProfile';
import screenName from '../../utils/screenName';
import color from '../../utils/color';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../services/redux/user/action';
import {navigateAndReset} from '../../utils/Navigation';
import DashBoard from '../../screen/Home/Dashboard';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const dispatch = useDispatch();
  const logoutFun = () => {
    dispatch(logoutAction({}));
    navigateAndReset([{name: screenName.login}], 0);
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: color.primary,
      }}>
      <Drawer.Screen
        name={screenName.myProfile}
        component={MyProfile}
        options={{drawerLabel: 'My Profile'}}
      />
      <Drawer.Screen
        name={screenName.dashBoard}
        component={DashBoard}
        options={{drawerLabel: 'Dashboard'}}
      />
      <Drawer.Screen
        name={screenName.logout}
        component={MyProfile}
        options={{
          drawerLabel: ({focused}) => (
            <DrawerItem
              label={'Logout'}
              focused={focused}
              activeTintColor={color.primary}
              onPress={logoutFun}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
