import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../navigation/stack/AuthStack';

export type getStatedScreenProp = StackNavigationProp<
  AuthStackParamList,
  'getStart'
>;
export interface GetStatedProps {
  navigation: getStatedScreenProp;
}
