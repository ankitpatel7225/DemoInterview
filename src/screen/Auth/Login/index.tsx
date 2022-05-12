import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import Header from '../../../components/Header';
import {style} from './style';
import {loginProps} from './interface';
import InputContainer from '../../../components/InputContainer';
import Button from '../../../components/Button';
import CustomStatusBar from '../../../components/CustomStatusBar';
import {emailValidation} from '../../../utils/validation';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {loginSuccessAction} from '../../../services/redux/user/action';

const Login: React.FC<loginProps> = (props: loginProps) => {
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const validation = () => {
    let isValidate = true;

    if (!email) {
      isValidate = false;
      error.email = `Email address can't be empty!`;
    } else if (!emailValidation(email)) {
      isValidate = false;
      error.email = `Please enter valid email address.`;
    } else {
      error.email = null;
    }
    if (!password) {
      isValidate = false;
      error.password = `Password can't be empty!`;
    } else {
      error.password = null;
    }

    setError({...error});
    if (isValidate) {
      checkEmailIsAlready();
    }
  };

  const checkEmailIsAlready = () => {
    setLoading(true);
    firestore()
      .collection('users')
      .where('email', '==', email?.trim()?.toLowerCase())
      .where('password', '==', password?.trim())
      .get()
      .then(querySnapshot => {
        setLoading(false);
        if (!querySnapshot.empty) {
          querySnapshot.forEach(documentSnapshot => {
            dispatch(loginSuccessAction(documentSnapshot.data()));
          });
          props.navigation.reset({index: 0, routes: [{name: 'main'}]});
        } else {
          Alert.alert(
            'Failed!',
            'Your account is not register with us. Please sign up first!',
            [
              {
                text: 'Sign Up',
                onPress: () => props.navigation.navigate('signUp'),
              },
              {text: 'Close'},
            ],
          );
        }
      })
      .catch(error => {
        setLoading(false);
      });
  };

  return (
    <View style={style.container}>
      <CustomStatusBar />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            headerCenterLogo={SvgIcon.LogoHeader}
            leftIcon={() => <></>}
            rightIcon={SvgIcon.BackArrow}
          />
          <Text style={style.titleText}>WELCOME BACK!</Text>
          <Text style={style.messageText}>Please login to your account</Text>
          <View style={{flex: 1, marginHorizontal: 15, marginTop: 70}}>
            <InputContainer
              setValue={setEmail}
              inputValue={email}
              lable={'Email address'}
              secureText={false}
              inputProps={{keyboardType: 'email-address'}}
              error={error.email}
            />
            <InputContainer
              setValue={setPassword}
              inputValue={password}
              lable={'Password'}
              secureText={true}
              hideText={true}
              containerStyle={{marginTop: 18}}
              error={error.password}
            />
            <Button
              name={'Login'}
              isLoading={loading}
              containerStyle={{marginTop: 44}}
              nameTextStyle={{textTransform: 'none'}}
              onPress={validation}
            />
            <View style={style.signUpRowView}>
              <Text style={style.dontHaveText}>Don't have an account?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate('signUp')}>
                <Text style={style.signUpText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
