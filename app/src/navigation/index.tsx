import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from '../screens/SignInScreen';
import LandingScreen from '../screens/LandingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen';


const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
         <Stack.Screen name="SignIn" component={SignInScreen} /> 
         <Stack.Screen name="SignUp" component={SignUpScreen} /> 
         <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} /> 
         <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> 
         <Stack.Screen name="NewPassword" component={NewPasswordScreen} />  
         <Stack.Screen name="Home" component={HomeScreen} /> 
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Category" component={CategoryScreen} /> 


    </Stack.Navigator>
      
    
  )
}

export default Navigation;