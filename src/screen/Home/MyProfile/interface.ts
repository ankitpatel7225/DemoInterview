import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../navigation/stack/AuthStack';

export type myProfileNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'myProfile'
>;

export interface myProfileProp {
  navigation: myProfileNavigationProp;
}
