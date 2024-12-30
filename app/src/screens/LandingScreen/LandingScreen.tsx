import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const LandingPageScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('SignIn'); // Navigate to SignInScreen
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Welcome to HealthCare App</Text>

      {/* Subtitle */}
      <Text style={styles.subText}>
        Simplifying healthcare for you. Book appointments, manage records, and connect with professionals—all in one place.
      </Text>

      {/* Lottie Animation */}
      <LottieView
        source={require('../../../../assets/animations/healthcare.json')} // Replace with your Lottie animation file
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        © 2024 HealthCare App. Your trusted healthcare partner.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Light blue background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333', // Dark text
    marginBottom: 15,
    textAlign: 'center',
    letterSpacing: 1.2, // Adds a nice space between letters
  },
  subText: {
    fontSize: 16,
    color: '#616161', // Softer gray text for subtitle
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  animation: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#3871F3', // Bright pink color for a pop of color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5, // Adds shadow for Android
    marginTop: 20,
  },
  getStartedText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  footerText: {
    color: '#757575', // Light gray footer text
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
  },
});

export default LandingPageScreen;
