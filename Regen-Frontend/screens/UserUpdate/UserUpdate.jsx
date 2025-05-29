import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { updateUserDetails } from '../../services/authService'; // Assume you have this service
import { styles } from "./UserUpdate.style"; // Your styles

const UserUpdate = ({ route, navigation }) => {
  const { userId, user } = route.params;

  const [fullName, setFullName] = useState(user.fullName || '');
  const [email, setEmail] = useState(user.email || '');
  const [username, setUsername] = useState(user.username || '');
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [street, setStreet] = useState(user.address?.street || '');
  const [city, setCity] = useState(user.address?.city || '');
  const [state, setState] = useState(user.address?.state || '');
  const [apartment, setApartment] = useState(user.address?.apartment || '');
  const [zipCode, setZipCode] = useState(user.address?.zipCode || '');

  const handleUpdateUserDetails = async () => {
    if (!fullName || !email || !username || !dateOfBirth || !phoneNumber || !street || !city || !state || !zipCode) {
      Alert.alert('Please fill out all required fields');
      return;
    }

    try {
      const updatedUser = {
        fullName,
        email,
        username,
        dateOfBirth,
        phoneNumber,
        address: {
          street,
          city,
          state,
          apartment,
          zipCode
        }
      };

      const response = await updateUserDetails(userId, updatedUser); // Capture the response
      Alert.alert('User details updated successfully');

      navigation.navigate('UserDetails', { user: response.data.data }); // Use the response here
    } catch (error) {
      console.error("Update failed", error);
      Alert.alert('Failed to update user details');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update User Details</Text>

      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Date of Birth Input */}
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {/* Address Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <TextInput
        style={styles.input}
        placeholder="Apartment (optional)"
        value={apartment}
        onChangeText={setApartment}
      />

      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="numeric"
      />

      {/* Update Button */}
      <TouchableOpacity style={styles.button} onPress={handleUpdateUserDetails}>
        <Text style={styles.buttonText}>Update Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserUpdate;
