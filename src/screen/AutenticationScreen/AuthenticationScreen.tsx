import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import {Checkbox} from '../../components';
import {loginvalidationschema} from '../../validations/validation';
import {routes} from '../../types';
import {colors} from '../../styles/color';
import {fonts} from '../../styles/Fonts';
function AuthenticationScreen() {
  const navigation = useNavigation();
  const [checkbox, setCheckbox] = useState(false);
  function handlepress() {
    navigation.navigate(routes.profileScreen as never);
  }

  const initialvalues = {
    email: '',
    password: '',
    termsandconditions: false,
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={loginvalidationschema}
      onSubmit={() => handlepress()}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue,
        touched,
      }) => {
        return (
          <ScrollView style={styles.root}>
            <View style={styles.loginscreenview}>
              <Text style={styles.logintext}>Create Your</Text>
              <Text style={styles.logintext}>Account</Text>
            </View>
            <TextInput
              placeholder="Email"
              style={styles.inputbox}
              value={values.email}
              onBlur={handleBlur('email')}
              placeholderTextColor="#9e9e9e"
              onChangeText={handleChange('email')}
            />
            {/* <ErrorMessage name='email'  /> */}
            {touched.email && (
              <Text style={styles.errormessagestyles}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              style={styles.inputbox}
              secureTextEntry={true}
              placeholderTextColor="#9e9e9e"
            />
            {touched.password && (
              <Text style={styles.errormessagestyles}>{errors.password}</Text>
            )}
            <View style={styles.checkboxinput}>
              <View style={styles.Checkboxinputstyles}>
                <View style={{flexDirection: 'row'}}>
                  <Checkbox
                    onPress={() => {
                      setCheckbox(prev => !prev);
                      setFieldValue(
                        'termsandconditions',
                        !values.termsandconditions,
                      );
                    }}
                    title="remeber me"
                    isChecked={checkbox}
                    onBlur={handleBlur('termsandconditions')}
                  />
                </View>
                {touched.termsandconditions && (
                  <Text style={styles.errormessagestyles}>
                    {errors.termsandconditions}
                  </Text>
                )}
              </View>
            </View>
            <Pressable
              onPress={() => {
                handleSubmit();
              }}
              style={styles.submitbutton}>
              <Text style={styles.submitbuttontext}>Sign up</Text>
            </Pressable>
          </ScrollView>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.primarybackgroundcolor,
    flex: 1,
    color: 'white',
    padding: 10,
  },
  loginscreenview: {
    paddingTop: 48,
    paddingBottom: 36,
  },
  logintext: {
    fontSize: 46,
    color: 'white',
    alignSelf: 'flex-start',
    fontFamily: fonts.UrbanistBold,
  },
  inputbox: {
    height: 56,
    alignSelf: 'flex-start',
    backgroundColor: '#1f222a',
    width: '100%',
    color: 'white',
    marginTop: 30,
    borderRadius: 40,
    paddingLeft: 30,
  },
  checkboxinput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  checkboxinputtext: {
    color: 'white',
    margin: 0,
  },
  submitbutton: {
    height: 55,
    backgroundColor: colors.secondarycolor,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,
  },
  submitbuttontext: {
    color: 'white',
    fontFamily: 'Urbanist-Bold',
    fontSize: 15,
  },
  checkboxstyle: {
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  Checkboxinputstyles: {flexDirection: 'column', alignItems: 'center'},
  errormessagestyles: {
    color: 'red',
    alignSelf: 'flex-start',
    padding: 10,
  },
});

export default AuthenticationScreen;
