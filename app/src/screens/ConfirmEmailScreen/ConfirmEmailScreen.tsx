import { View, Text,StyleSheet, ScrollView } from 'react-native';
//import Logo from '../../../../assets/images/Logo.jpg';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';
import {useForm} from 'react-hook-form';


const ConfirmEmailScreen = () => {
  const {control, handleSubmit,watch, formState: { errors }} = useForm();

const [code, setCode]= useState('');
const navigation= useNavigation();

const onConfirmPressed =( data) =>{
  console.warn(data);
    navigation.navigate('Home');
};


const onSignInPress =() =>{
    navigation.navigate('SignIn');
};


const onResendPress =()=>{
    
};


  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput 
      placeholder="Enter your confirmation code"
       name="code"
       control={control}
       rules= {
        {
          required:'Confirmaton code is required'
        }
       }
       
       
        />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>

    
      <CustomButton 
      text="Resend code" 
      onPress={onResendPress} 
      type="SECONDARY" />

     <CustomButton 
     text="Back to Sign in" 
      onPress={onSignInPress} 
      type="TERTIARY" />
      
    </View>
    </ScrollView>
  )
}

const styles= StyleSheet.create(
    {
        root:{
            alignItems:'center',
            padding:20,
        },

        text:{
            color:'gray',
            marginVertical: 10,
        },

        link:{
            color: '#FDB075',
        },
        title:{
          fontSize:24,
            fontWeight:'bold',
            color: '#051C60',
            margin:10,
        },
    }
);
export default ConfirmEmailScreen;