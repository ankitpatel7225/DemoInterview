import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../navigation/stack/AuthStack';

export type loginProp = StackNavigationProp<AuthStackParamList, 'login'>;
export interface loginProps {
  navigation: loginProp;
}
