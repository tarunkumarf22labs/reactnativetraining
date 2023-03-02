import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../types';
import {colors} from '../../styles/color';
import {fonts} from '../../styles/Fonts';

function Homescreen() {
  //   console.log(props);
  //   Difference between navigate and push
  //    push will not check back
  //  navigate will check back
  const navigation = useNavigation();
  function handlePress() {
    // navigate.push('AuthenticationScreen');
    navigation.navigate(routes.AuthenticationScreen as never);
    // props.navigation.navigate('AuthenticationScreen');
  }
  //  to go back
  // navigate.goBack()
  // navigate.popTop()

  //   to send data between pages
  //   navigation.navigate('UserProfile' , {  user : user   })

  //    to get props from page
  //    const route = Useroute()

  //  to set options
  // route.setOption({ title : user.username })
  //  we should send minimum  data
  return (
    <View style={styles.root}>
      <ImageBackground
        resizeMode="cover"
        style={styles.root}
        source={require('../../../assets/img.png')}>
        <View style={styles.roottextcontainer}>
          <Text style={styles.rootboldtext}>Welcome to 👋</Text>
          <Text style={styles.rootmaintext}>Helia</Text>
          <Text style={styles.roottext}>
            The best hotel booking in this century
          </Text>
          <Text style={styles.roottext}>to accompany your vacation</Text>
          <Text style={styles.roottext} onPress={handlePress}>
            Click here
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// image background
// dont use absolute use root

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootimage: {width: '100%', height: '100%'},
  roottextcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 30,
    // height : '100%
    // position: 'absolute',
    // bottom: 40,
    // left: 30,
    // flex: 1
  },
  roottext: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
  },
  rootboldtext: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Urbanist-Bold',
  },
  rootmaintext: {
    color: colors.secondarycolor,
    fontSize: 64,
    fontFamily: fonts.UrbanistBold,
  },
});

export default Homescreen;
