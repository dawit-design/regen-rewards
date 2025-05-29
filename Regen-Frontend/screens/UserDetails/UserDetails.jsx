import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from "./UserDetails.style";
import { getUserProfile } from '../../services/authService';

const UserDetails = ({ route, navigation }) => {
  const { userId } = route.params;
  console.log(userId);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userId);
        console.log("Address logs", data.data);
        if (data && data.data && data.data.data) {
          setUser(data.data.data);
        }
      } catch (error) {
        console.error('Error fetching user details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          {/* Profile Picture */}
          <Image
            source={
              user.profilePicture 
                ? { uri: user.profilePicture }
                : require("../../assets/images/Wallpaper 2.jpg")  
            }
            style={styles.profilePicture}
          />

          {/* Name */}
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.email}>{user.email}</Text>

          {/* Details Sections */}
          <View style={styles.section}>
            <View style={styles.iconLabel}>
              <FontAwesome5 name="user" size={14} style={styles.icon} />
              <Text style={styles.label}>Username:</Text>
            </View>
            <Text style={styles.info}>{user.username}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.iconLabel}>
              <FontAwesome5 name="birthday-cake" size={14} style={styles.icon} />
              <Text style={styles.label}>Date of Birth:</Text>
            </View>
            <Text style={styles.info}>{user.dateOfBirth}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.iconLabel}>
              <FontAwesome5 name="phone" size={14} style={styles.icon} />
              <Text style={styles.label}>Phone Number:</Text>
            </View>
            <Text style={styles.info}>{user.phoneNumber}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.iconLabel}>
              <FontAwesome5 name="map-marker-alt" size={14} style={styles.icon} />
              <Text style={styles.label}>Address:</Text>
            </View>
            <Text style={styles.info}>
              {user.address ? (
                `${user.address.street || 'N/A'}, ${user.address.city || 'N/A'}, ${user.address.state || 'N/A'}, Apt ${user.address.apartment || 'N/A'}, ${user.address.zipCode || 'N/A'}`
              ) : (
                'Address not available'
              )}
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.iconLabel}>
              <FontAwesome5 name="calendar-alt" size={14} style={styles.icon} />
              <Text style={styles.label}>Account Created:</Text>
            </View>
            <Text style={styles.info}>{new Date(user.creationDate).toLocaleDateString()}</Text>
          </View>

          {/* Edit Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('updateDetails', { userId: user._id, user })}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <Button
            title="Update Password"
            onPress={() => navigation.navigate('UpdatePassword', { userId: user._id })}
            color="#007BFF"
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default UserDetails;
