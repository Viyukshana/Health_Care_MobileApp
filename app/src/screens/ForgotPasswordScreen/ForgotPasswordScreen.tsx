import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { auth, sendPasswordResetEmail } from '../../../../firebaseConfig'; 

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // Track if the email was sent

  // Handle "Send" button press
  const onSendPressed = async (data) => {
    const { username: email } = data;
    setLoading(true);

    try {
      // Send Reset Email
      await sendPasswordResetEmail(auth, email); 

      // Show Success Message
      Alert.alert(
        'Check Your Email',
        `We've sent a password reset link to ${email}. Please check your email and follow the instructions.`
      );
      setEmailSent(true); // Email sent successfully
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        error.message || 'Failed to send reset email'
      );
    } finally {
      setLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
        {/* Add an image or icon at the top */}
        <Image
          source={require('../../../../assets/images/forgotPassword.jpg')} // Replace with your image
          style={styles.image}
        />

        <Text style={styles.title}>Reset Your Password</Text>

        {!emailSent ? (
          <>
            <Text style={styles.subtitle}>
              Enter your registered email to receive a password reset link.
            </Text>
            <CustomInput
              name="username"
              control={control}
              placeholder="Enter your email"
              rules={{
                required: 'Email is required',
              }}
            />
            <CustomButton
              text={loading ? 'Sending...' : 'Send'}
              onPress={handleSubmit(onSendPressed)}
              disabled={loading}
            />
          </>
        ) : (
          <>
            <Text style={styles.message}>
              We have sent a password reset email to your registered email. Please check your inbox and follow the instructions to reset your password.
            </Text>
            <CustomButton
              text="Back to Sign In"
              onPress={onSignInPress}
              type="PRIMARY"
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1, // Take up the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
    backgroundColor: '#F3F8FE', // Light background color
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#051C60',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7E8C99',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

export default ForgotPasswordScreen;
