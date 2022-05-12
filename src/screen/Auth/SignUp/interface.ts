import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../navigation/stack/AuthStack';

export type signUpScreenProp = StackNavigationProp<
  AuthStackParamList,
  'signUp'
>;
export interface signUpProps {
  navigation: signUpScreenProp;
}

export interface genderObj  {
  label?:string
}

export interface stateObj  {
  id?:number,
  name?:string
}

export interface hobbiesObj  {
    value?:number,
    label?:string
}