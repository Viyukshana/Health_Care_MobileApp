import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, placeholder, secureTextEntry, rules = {} }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={[styles.container]}>
          {/* Input Field */}
          <TextInput
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            onChangeText={onChange}
            style={[
              styles.input,
              { borderColor: error ? 'red' : 'black' }, // Dynamic border color for error
            ]}
            secureTextEntry={secureTextEntry}
          />
          {/* Error Message */}
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'black',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 14,
  },
});

export default CustomInput;
