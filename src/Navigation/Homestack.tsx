import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthenticationScreen from '../screen/AutenticationScreen/AuthenticationScreen';
import Homescreen from '../screen/Homescreen/Homescreen';
import ProfileEditingScreen from '../screen/ProfileEditingScreen/ProfileEditingScreen';

function Homestack() {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#181a20',
        },
        headerTintColor: '#fff',
      }}>
      <Screen
        name="Homescreen"
        component={Homescreen}
        options={{headerShown: false}}
      />
      <Screen
        name="AuthenticationScreen"
        component={AuthenticationScreen}
        options={{headerTitle: ''}}
      />
      <Screen
        name="profileScreen"
        component={ProfileEditingScreen}
        options={{headerTitle: 'Fill your Profile'}}
      />
    </Navigator>
  );
}

export default Homestack;
