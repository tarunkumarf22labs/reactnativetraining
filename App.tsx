import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// import Navigation from './src/Navigation';
import Authstack from './src/Navigation/Authstack';
import Homestack from './src/Navigation/Homestack';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import ProfileEditingScreen from './screen/ProfileEditingScreen/ProfileEditingScreen';
function App() {
  const auth = true;
  // const [music, setMusic] = useState(false);

  return (
    <NavigationContainer>
      {auth ? <Authstack /> : <Homestack />}
    </NavigationContainer>
    // <Sandbox />
  );
}

// image background
// dont use absolute use flex

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


//   
export default App;
