import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import Button from '../../../components/Button';
import {GetStatedProps} from './interface';
import {style} from './style';
import SplashScreen from 'react-native-splash-screen';

const GetStated: React.FC<GetStatedProps> = (props: GetStatedProps) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.imageBackground}
        resizeMode="cover"
        source={require('../../../assets/image/getstatedImage.png')}>
        <View style={style.secondView}>
          <SvgIcon.LogoHeader style={{alignSelf: 'center'}} />
          <Text style={style.getStatedText}>Get started</Text>
          <Button
            name={'LOGIN'}
            containerStyle={[style.buttonContainer, style.loginButton]}
            onPress={() => props.navigation.navigate('login')}
          />
          <Button
            name={'SIGN UP'}
            containerStyle={[style.buttonContainer]}
            onPress={() => props.navigation.navigate('signUp')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStated;
