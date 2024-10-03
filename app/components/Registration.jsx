import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import authService from '../services/authService';

const Registration = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [aadhaar, setAadhaar] = useState('');

  const handleMobileSubmit = async () => {
    const response = await authService.sendOTP(mobile);
    if (response.success) {
      // Navigate to OTP screen or prompt OTP input
      console.log('OTP sent successfully');
    }
  };

  const handleRegister = async () => {
    const response = await authService.registerUser({ mobile, otp, aadhaar });
    if (response.success) {
      navigation.navigate('Login');
    }
  };

  return (
    <View>
      <Text>Register with Mobile</Text>
      <TextInput
        placeholder="Enter Mobile"
        value={mobile}
        onChangeText={setMobile}
      />
      <Button title="Send OTP" onPress={handleMobileSubmit} />
      <TextInput
        placeholder="Enter Aadhaar"
        value={aadhaar}
        onChangeText={setAadhaar}
      />
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Registration;
