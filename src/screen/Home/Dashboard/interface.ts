import {StackNavigationProp} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';
import {AuthStackParamList} from '../../../navigation/stack/AuthStack';

export type dashboardNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'dashBoard'
>;

export interface dashboardProp {
  navigation: dashboardNavigationProp;
}

export interface suggestions {
  id: number;
  name: string;
  image: ImageSourcePropType | null;
}
