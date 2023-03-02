import React from 'react';
import AuthenticationScreen from '../screen/AutenticationScreen/AuthenticationScreen';
import Homescreen from '../screen/Homescreen/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEditingScreen from '../screen/ProfileEditingScreen/ProfileEditingScreen';
import {routes} from '../types';

function Authstack() {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName={routes.Homescreen}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#181a20',
        },
        headerTintColor: '#fff',
      }}>
      <Screen
        name={routes.Homescreen}
        component={Homescreen}
        options={{headerShown: false}}
      />
      <Screen
        name={routes.AuthenticationScreen}
        component={AuthenticationScreen}
        options={{headerTitle: ''}}
      />
      <Screen
        name={routes.profileScreen}
        component={ProfileEditingScreen}
        options={{headerTitle: 'Fill your Profile'}}
      />
    </Navigator>
  );
}

export default Authstack;
// nested routing