// screens/UpdatePassword/UpdatePassword.js
import {styles} from "./UpdatePassword.style"
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateUserPassword } from '../../services/authService';

const UpdatePassword = ({ route, navigation }) => {
  const { userId } = route.params; // Get userId from navigation params
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      await updateUserPassword(userId, oldPassword, newPassword);
      alert('Password updated successfully');
      navigation.goBack(); // Navigate back or to another screen
    } catch (error) {
      alert('Failed to update password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Update Password" onPress={handleUpdatePassword} />
    </View>
  );
};



export default UpdatePassword;
