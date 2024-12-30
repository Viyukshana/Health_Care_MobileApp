



// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';
// import { useForm } from 'react-hook-form';

// // Firebase imports
// import { auth, signInWithEmailAndPassword } from '../../../../firebaseConfig';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// const firestore = getFirestore();

// const SignInScreen = () => {
//   const { control, handleSubmit } = useForm();
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();

//   // Handle Sign-In Logic
//   const onSignInPressed = async (data) => {
//     const { username, password } = data;

//     try {
//       setLoading(true);

//       // Search Firestore for the username
//       const usersRef = collection(firestore, 'users');
//       const q = query(usersRef, where('username', '==', username));
//       const querySnapshot = await getDocs(q);

//       if (querySnapshot.empty) {
//         Alert.alert('Error', 'Username not found!');
//         setLoading(false);
//         return;
//       }

//       // Get the first matched user's email
//       const userDoc = querySnapshot.docs[0].data();
//       const email = userDoc.email;

//       // Use the email and password for Firebase Authentication
//       await signInWithEmailAndPassword(auth, email, password);

//       Alert.alert('Success', 'Login successful!');
//       navigation.navigate('Home', { username });

//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', error.message || 'Something went wrong!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onForgotPasswordPressed = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const onSignUpPressed = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <ScrollView>
//       <View style={styles.root}>
//         <Image
//           source={require('../../../../assets/images/Logo.jpg')}
//           style={styles.logo}
//           resizeMode="contain"
//         />

//         <CustomInput
//           name="username"
//           placeholder="Username"
//           control={control}
//           rules={{ required: 'Username is required' }}
//         />

//         <CustomInput
//           name="password"
//           placeholder="Password"
//           control={control}
//           secureTextEntry
//           rules={{
//             required: 'Password is required',
//             minLength: { value: 6, message: 'Password should be at least 6 characters' },
//           }}
//         />

//         <CustomButton
//           text={loading ? 'Signing In...' : 'Sign In'}
//           onPress={handleSubmit(onSignInPressed)}
//           disabled={loading}
//         />

//         <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
//         <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#E3F2FD' // Or use the gradient background or color from your landing screen
//   },
//   logo: {
//     width: '80%',
//     maxWidth: 300,
//     maxHeight: 200,
//     marginBottom: 20,
//   },
// });

// export default SignInScreen;


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, StatusBar } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

// Firebase imports
import { auth, signInWithEmailAndPassword } from '../../../../firebaseConfig';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firestore = getFirestore();

const SignInScreen = () => {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Handle Sign-In Logic
  const onSignInPressed = async (data) => {
    const { username, password } = data;

    try {
      setLoading(true);

      // Search Firestore for the username
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert('Error', 'Username not found!');
        setLoading(false);
        return;
      }

      // Get the first matched user's email
      const userDoc = querySnapshot.docs[0].data();
      const email = userDoc.email;

      // Use the email and password for Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home', { username });

    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      {/* Add StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="#E3F2FD" />
      <View style={styles.root}>
        <Image
          source={require('../../../../assets/images/Logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password should be at least 6 characters' },
          }}
        />

        <CustomButton
          text={loading ? 'Signing In...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
          disabled={loading}
        />

        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD' // Or use the gradient background or color from your landing screen
  },
  logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 20,
  },
});

export default SignInScreen;
