import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import { enableScreens } from 'react-native-screens';
//import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import Navigation from './src/navigation';
import LandingPageScreen from './src/screens/LandingScreen';

import tailwind from 'tailwind-rn';


enableScreens();

const index = () => {
  return (
    <SafeAreaView style={styles.root}>
      
        <Navigation/>
    

    </SafeAreaView>
      
    
  );
};

const styles=StyleSheet.create(
    {
root: {
    flex:1,
    backgroundColor:'lightblue',
},
    }
);

export default index;