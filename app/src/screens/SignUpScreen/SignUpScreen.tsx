// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';
// import { useForm } from 'react-hook-form';

// // Firebase imports
// import { auth, createUserWithEmailAndPassword } from '../../../../firebaseConfig';
// import { getFirestore, setDoc, doc } from 'firebase/firestore';

// const firestore = getFirestore();

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const SignUpScreen = () => {
//   const { control, handleSubmit, watch } = useForm();
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   const pwd = watch('password');

//   // Handle Register Logic
//   const onRegisterPressed = async (data) => {
//     const { username, email, password } = data;
//     setLoading(true);

//     try {
//       // Register user with Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//       // Save additional user details to Firestore
//       await setDoc(doc(firestore, 'users', userCredential.user.uid), {
//         username,
//         email,
//         uid: userCredential.user.uid,
//       });

//       Alert.alert('Success', 'Account created successfully!');
//       navigation.navigate('SignIn');

//     } catch (error) {
//       console.error(error);

//       // Firebase Error Handling
//       if (error.code === 'auth/email-already-in-use') {
//         Alert.alert('Email Already in Use', 'The email you entered is already registered.');
//       } else {
//         Alert.alert('Registration Failed', error.message || 'Something went wrong!');
//       }

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flex: 1 }}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Create an account</Text>

//         <CustomInput
//           name="username"
//           placeholder="Username"
//           control={control}
//           rules={{
//             required: 'Username is required',
//             minLength: { value: 3, message: 'Username should be at least 3 characters' },
//             maxLength: { value: 24, message: 'Username should be maximum 24 characters' },
//           }}
//         />

//         <CustomInput
//           name="email"
//           placeholder="Email"
//           control={control}
//           rules={{
//             required: 'Email is required',
//             pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
//           }}
//         />

//         <CustomInput
//           name="password"
//           placeholder="Password"
//           control={control}
//           secureTextEntry
//           rules={{
//             required: 'Password is required',
//             minLength: { value: 8, message: 'Password should be at least 8 characters' },
//           }}
//         />

//         <CustomInput
//           name="password-repeat"
//           placeholder="Repeat Password"
//           control={control}
//           secureTextEntry
//           rules={{
//             validate: value => value === pwd || 'Passwords do not match',
//           }}
//         />

//         <CustomButton
//           text={loading ? 'Registering...' : 'Register'}
//           onPress={handleSubmit(onRegisterPressed)}
//           disabled={loading}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,  // Ensures the View takes up the full screen
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#E3F2FD',  // Background color for the whole screen
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#051C60',
//     margin: 10,
//   },
// });

// export default SignUpScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

// Firebase imports
import { auth, createUserWithEmailAndPassword } from '../../../../firebaseConfig';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firestore = getFirestore();

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const pwd = watch('password');

  const onRegisterPressed = async (data) => {
    const { username, email, password } = data;
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        username,
        email,
        uid: userCredential.user.uid,
      });

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);

      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email Already in Use', 'The email you entered is already registered.');
      } else {
        Alert.alert('Registration Failed', error.message || 'Something went wrong!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.root}>
        {/* Add an illustrative image or logo */}
        <Image
          source={require('../../../../assets/images/Signup.png')} // Replace with your image
          style={styles.image}
        />

        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: { value: 3, message: 'Username should be at least 3 characters' },
            maxLength: { value: 24, message: 'Username should be maximum 24 characters' },
          }}
        />

        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Password should be at least 8 characters' },
          }}
        />

        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Passwords do not match',
          }}
        />

        <CustomButton
          text={loading ? 'Registering...' : 'Register'}
          onPress={handleSubmit(onRegisterPressed)}
          disabled={loading}
        />

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F8FE', // Light background color for a clean look
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7E8C99',
    marginBottom: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#7E8C99',
  },
  link: {
    color: '#3366FF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
