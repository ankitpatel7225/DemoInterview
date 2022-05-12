import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stack/AuthStack';
import {navigationRef} from '../utils/Navigation';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>{AuthStack()}</NavigationContainer>
  );
};

export default Route;
