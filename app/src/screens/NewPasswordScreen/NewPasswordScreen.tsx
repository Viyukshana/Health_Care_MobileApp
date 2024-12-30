import { View, Text,StyleSheet, ScrollView } from 'react-native';
//import Logo from '../../../../assets/images/Logo.jpg';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const NewPasswordScreen = () => {

  const {control, handleSubmit} = useForm();
const navigation= useNavigation();

const onSubmitPressed =(data) =>{
  console.warn(data);
  navigation.navigate('Home');
};


const onSignInPress =() =>{
  navigation.navigate('NewPassword');
};


const onResendPress =()=>{
   
};


  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>

      <CustomInput 
      name="code"
      control={control}
      placeholder="Code"
      rules={
        {
required:'Code is required'
        }
      }
        />

<CustomInput 
name="password "
control={control}
placeholder="Enter your new password"
secureTextEntry
rules={{required:'Password is required',
  minLength:{
      value:8,
      message:'Password should be atleast 8 characters long'
  },
}}
        />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>

    
     

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
export default NewPasswordScreen;