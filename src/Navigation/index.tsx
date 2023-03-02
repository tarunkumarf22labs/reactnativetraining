import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthenticationScreen from '../screen/AutenticationScreen/AuthenticationScreen';
import Homescreen from '../screen/Homescreen/Homescreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEditingScreen from '../screen/ProfileEditingScreen/ProfileEditingScreen';
import {routes} from '../types';

// stack navigator
// Navigator  initialRouteName='UserProfile'
// Navigation Container
// screenOPtions
//

const {Navigator, Screen} = createNativeStackNavigator();
// { Navigator , screen  }

function Navigation() {
  return (
    <NavigationContainer>
      {/* <AuthenticationScreen /> */}
      <Navigator
        initialRouteName="AuthenticationScreen"
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
    </NavigationContainer>
  );
}

export default Navigation;
