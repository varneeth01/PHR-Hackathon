import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import profileService from '../services/profileService';

const ProfileUpdate = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleUpdateProfile = async () => {
    const response = await profileService.updateProfile({ email, phone });
    if (response.success) {
      console.log('Profile updated successfully');
    }
  };

  return (
    <View>
      <Text>Update Profile</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Update" onPress={handleUpdateProfile} />
    </View>
  );
};

export default ProfileUpdate;
