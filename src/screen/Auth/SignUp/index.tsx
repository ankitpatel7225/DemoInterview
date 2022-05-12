import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import Header from '../../../components/Header';
import {style} from './style';
import {genderObj, hobbiesObj, signUpProps, stateObj} from './interface';
import InputContainer from '../../../components/InputContainer';
import firestore from '@react-native-firebase/firestore';
import SelectMultiple from 'react-native-select-multiple';
import Button from '../../../components/Button';
import CustomStatusBar from '../../../components/CustomStatusBar';
import RadioButtonRN from 'radio-buttons-react-native';
import DropDown from '../../../components/DropDown';
import color from '../../../utils/color';
import {
  emailValidation,
  passwordValidation,
  stringValidation,
} from '../../../utils/validation';
import ErrorMessage from '../../../components/ErrorMessage';

const genderData = [
  {
    label: 'Male',
  },
  {
    label: 'Female',
  },
  {
    label: 'Other',
  },
];
const SignUp: React.FC<signUpProps> = (props: signUpProps) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [state, setState] = useState<stateObj>({});
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [selectedHobbies, setSelectedHobbies] = useState<Array<hobbiesObj>>([]);
  const [selectGender, setSelectGender] = useState<genderObj>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    firstName: null,
    state: null,
    email: null,
    password: null,
    address: null,
    hobbies: null,
    gender: null,
  });

  const validation = () => {
    let isValidate = true;
    if (!firstName) {
      isValidate = false;
      error.firstName = `First name can't be empty!`;
    } else if (!stringValidation(firstName)) {
      isValidate = false;
      error.firstName = `Please enter valid first name.`;
    } else {
      error.firstName = null;
    }
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
    } else if (!passwordValidation(password)) {
      isValidate = false;
      error.password = `Please enter valid password.`;
    } else {
      error.password = null;
    }

    if (!state?.name) {
      isValidate = false;
      error.state = `Please select state.`;
    } else {
      error.state = null;
    }
    if (!address) {
      isValidate = false;
      error.address = `Address can't be empty!`;
    } else if (!stringValidation(address)) {
      isValidate = false;
      error.address = `Please enter valid address.`;
    } else {
      error.address = null;
    }

    if (!selectGender.label) {
      isValidate = false;
      error.gender = `Please select gender.`;
    } else {
      error.gender = null;
    }

    if (selectedHobbies.length == 0) {
      isValidate = false;
      error.hobbies = `Please select hobbies.`;
    } else {
      error.hobbies = null;
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
      .doc(email?.toLocaleLowerCase())
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          Alert.alert(
            'Already register!',
            'Your account is already register with us. Please login to access!',
          );
          setLoading(false);
        } else {
          signUpToFirebase();
        }
      });
  };

  const signUpToFirebase = () => {
    firestore()
      .collection('users')
      .doc(email?.toLocaleLowerCase())
      .set({
        firstName: firstName,
        lastName: lastName,
        state: state.name,
        email: email?.toLocaleLowerCase(),
        password: password?.trim(),
        address: address,
        hobbies: selectedHobbies?.map(item => item.label)?.toString(),
        gender: selectGender.label,
      })
      .then(() => {
        setLoading(false);
        Alert.alert(
          'Login Successful!',
          'Your account is successfully register with us. Please login with same email and password.',
          [
            {text: 'Login', onPress: () => props.navigation.navigate('login')},
            {text: 'Close'},
          ],
        );
      })
      .catch(error => {
        console.log('error', error);
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
            leftIcon={SvgIcon.BackArrow}
            rightIcon={SvgIcon.BackArrow}
            onLeftIconClick={() => props.navigation.goBack()}
          />
          <Text style={style.titleText}>CREATE YOUR ACCOUNT</Text>
          <Text style={style.messageText}>
            Please fill in the with your details
          </Text>
          <View style={{marginHorizontal: 15, marginTop: 40}}>
            <InputContainer
              setValue={setFirstName}
              inputValue={firstName}
              lable={'First name'}
              secureText={false}
              error={error.firstName}
            />
            <InputContainer
              setValue={setLastName}
              inputValue={lastName}
              lable={'Last name'}
              secureText={false}
              containerStyle={{marginTop: 18}}
            />
            <InputContainer
              setValue={setEmail}
              inputValue={email}
              lable={'Email address'}
              secureText={false}
              containerStyle={{marginTop: 18}}
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
            <DropDown
              data={require('../../../utils/state.json')}
              value={state}
              onSelectItem={setState}
              displayKey={'name'}
              lable={'State'}
              containerStyle={{marginTop: 18}}
              error={error.state}
            />
            <InputContainer
              setValue={setAddress}
              inputValue={address}
              secureText={false}
              lable={'Address'}
              inputViewStyle={{height: 140}}
              containerStyle={{marginTop: 18}}
              inputStyle={{lineHeight: 22, paddingVertical: 10}}
              inputProps={{multiline: true, textAlignVertical: 'top'}}
              error={error.address}
            />
            <Text style={[style.lableText, {marginTop: 18}]}>Gender</Text>
            <View style={style.genderView}>
              <RadioButtonRN
                data={genderData}
                selectedBtn={e => setSelectGender(e)}
                style={{flexDirection: 'row'}}
                boxStyle={{flex: 1, marginLeft: 10}}
                box={false}
                textStyle={style.genderText}
                activeColor={color.primary}
              />
            </View>
            <ErrorMessage message={error.gender} />
            <View style={{marginTop: 18}}>
              <Text style={style.lableText}>Hobbies</Text>
              <SelectMultiple
                items={require('../../../utils/Hobbies.json')}
                selectedItems={selectedHobbies}
                onSelectionsChange={setSelectedHobbies}
                checkboxStyle={{tintColor: color.grayText}}
                selectedCheckboxStyle={{tintColor: color.primary}}
                labelStyle={style.genderText}
                rowStyle={{
                  backgroundColor: color.inputBack,
                  borderBottomWidth: 0,
                }}
              />
            </View>
            <ErrorMessage message={error.hobbies} />
            <Button
              name={'Register'}
              containerStyle={{marginVertical: 80}}
              onPress={validation}
              isLoading={loading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
