import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import authService from '../services/authService';

const Login = ({ navigation }) => {
  const [abhaNumber, setAbhaNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    const response = await authService.loginUser({ abhaNumber, otp });
    if (response.success) {
      navigation.navigate('ProfileUpdate');
    }
  };

  return (
    <View>
      <Text>Login to your ABHA</Text>
      <TextInput
        placeholder="Enter ABHA Number"
        value={abhaNumber}
        onChangeText={setAbhaNumber}
      />
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
