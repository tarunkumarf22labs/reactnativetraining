/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Modal,
  Platform,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import DatePicker from 'react-native-date-picker';
import {Formik} from 'formik';
import moment from 'moment';
import {profilevalidationschema} from '../../validations/validation';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
export default function ProfileEditingScreen() {
  const [open, setOpen] = useState(false);
  const [value] = useState('');
  const [warning, SetshowWarning] = useState(false);
  const [uri, setUri] = React.useState('');
  let genderoptions = ['Male', 'Female'];
  const initialvalues = {
    image: '',
    fullname: '',
    nickname: '',
    dateofbirth: '',
    email: '',
    phonenumber: '',
    gender: '',
  };
  async function handlepress() {
    let Permission = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    if (Permission === 'granted') {
      let data = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setUri(data.path);
    }
  }

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={profilevalidationschema}
      onSubmit={e => {
        console.log(e);
      }}>
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => {
        return (
          <View style={styles.root}>
            <KeyboardAwareScrollView style={styles.scroolviewstyle}>
              <Pressable
                onPress={() => {
                  handlepress();
                  setFieldValue('image', uri);
                }}
                style={styles.avatarpressablestyles}>
                <Image
                  style={styles.profileimage}
                  source={
                    !uri
                      ? require('../../../assets/profileiamge.jpg')
                      : {uri: uri}
                  }
                />
              </Pressable>

              <View style={{width: '100%', padding: 10}}>
                <TextInput
                  placeholder="Full Name"
                  style={styles.inputbox}
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                />
                {touched.fullname && errors.fullname ? (
                  <Text style={styles.errormessagestyles}>
                    {errors.fullname}
                  </Text>
                ) : null}
                <TextInput
                  placeholder="Nickname"
                  style={styles.inputbox}
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('nickname')}
                  onBlur={handleBlur('nickname')}
                />
                {touched.nickname && errors.nickname ? (
                  <Text style={styles.errormessagestyles}>
                    {errors.nickname}
                  </Text>
                ) : null}
                <Pressable
                  style={[styles.inputbox, styles.dates]}
                  onPress={() => {
                    setOpen(true);
                  }}>
                  <Text style={styles.colorwhite}>
                    {values.dateofbirth
                      ? moment(values.dateofbirth).format('YYYY/MM/DD')
                      : 'choose your Date'}
                  </Text>
                </Pressable>
                {touched.dateofbirth && errors.dateofbirth ? (
                  <Text style={styles.errormessagestyles}>
                    {errors.dateofbirth}
                  </Text>
                ) : null}
                <DatePicker
                  modal
                  open={open}
                  date={new Date()} // moment
                  onConfirm={date => {
                    setOpen(false);
                    setFieldValue('dateofbirth', date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                  mode="date"
                  // locale="fr"
                />
                <TextInput
                  placeholder="Email"
                  style={styles.inputbox}
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email ? (
                  <Text style={styles.errormessagestyles}>{errors.email}</Text>
                ) : null}
                <PhoneInput
                  defaultValue={value}
                  containerStyle={styles.PhoneInputstyles}
                  textContainerStyle={styles.phoneinputcontainerstyles}
                  defaultCode="DM"
                  codeTextStyle={{color: 'white', display: 'none'}}
                  onChangeText={text => {
                    setFieldValue('phonenumber', text);
                  }}
                  // onChangeFormattedText={text => {
                  //   console.log(text);
                  //   // handleChange('phonenumber', text);
                  // }}
                  textInputStyle={styles.PhoneInputinputstyles}
                  withDarkTheme
                  withShadow
                />
                {touched.phonenumber && errors.phonenumber ? (
                  <Text style={styles.errormessagestyles}>
                    {errors.phonenumber}
                  </Text>
                ) : null}

                <Pressable
                  style={[styles.inputbox, styles.dates]}
                  onPress={() => {
                    SetshowWarning(true);
                  }}>
                  <Text style={styles.colorwhite}>
                    {values.gender ? values.gender : 'choose your gender'}
                  </Text>
                </Pressable>
                {touched.gender && errors.gender ? (
                  <Text style={styles.errormessagestyles}>{errors.gender}</Text>
                ) : null}
                {/* modal */}
                <Modal
                  visible={warning}
                  transparent
                  onRequestClose={() => SetshowWarning(false)}
                  animationType="slide"
                  hardwareAccelerated>
                  <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                      <View style={styles.modal_title}>
                        <Text>Select your gender</Text>
                      </View>
                      <View>
                        {genderoptions.map(e => {
                          return (
                            <Text
                              style={styles.modaloptionstext}
                              onPress={() => {
                                setFieldValue('gender', e);
                                SetshowWarning(false);
                              }}>
                              {e}
                            </Text>
                          );
                        })}
                      </View>
                      <Pressable
                        onPress={() => SetshowWarning(false)}
                        android_ripple={{color: '#fff'}}>
                        <Text>OK</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>

                <Pressable
                  style={styles.submitbutton}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.submitbuttontext}>Sign up</Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#181a20',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  profileimage: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputbox: {
    height: 56,
    alignSelf: 'flex-start',
    backgroundColor: '#1f222a',
    width: '100%',
    color: 'white',
    marginVertical: 10,
    borderRadius: 40,
    paddingLeft: 30,
  },
  submitbutton: {
    height: 50,
    width: '100%',
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 50,
  },
  submitbuttontext: {
    color: 'white',
    fontFamily: 'Urbanist-Bold',
    fontSize: 15,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
  },
  errormessagestyles: {
    color: 'red',
    alignSelf: 'flex-start',
    padding: 10,
  },
  modal_title: {
    justifyContent: 'center',
  },
  modaloptionstext: {
    paddingVertical: 10,
  },
  dates: {
    justifyContent: 'center',
  },
  scroolviewstyle: {
    width: '100%',
  },

  avatarpressablestyles: {
    alignItems: 'center',
  },
  PhoneInputstyles: {
    backgroundColor: '#1f222a',
    width: '100%',
    borderRadius: 50,
    marginVertical: 10,
  },
  phoneinputcontainerstyles: {
    backgroundColor: '#1f222a',
    borderRadius: 50,
    height: 56,
  },
  PhoneInputinputstyles: {
    height: 56,
    color: 'white',
  },

  colorwhite: {
    color: 'white',
  },
});
