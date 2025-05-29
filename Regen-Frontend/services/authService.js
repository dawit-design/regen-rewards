// const axios = require('axios');
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.159:9000/api/v1/users";
//FUNCTION TO HANDLE SIGNUP
const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Signup failed with status:" + response.status);
    }
  } catch (error) {
    console.error("Error while signing up", error);
    throw error;
  }
};

//FUNCTION TO HANDLE LOGIN
const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);

    if (response.status === 200) {
      const token = response.data.token; // Extract the token from the response
      if (token) {
        // Save the token to AsyncStorage
        await AsyncStorage.setItem('authToken', token);
      }

      return response.data;
    } else {
      throw new Error('Login failed with status: ' + response.status);
    }
  } catch (error) {
    console.error('Error while logging in:', error);
    throw error;
  }
};

//FUNCTION TO HANDLE USER PROFILE
const getUserProfile = async(userData) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, userData)
    return response
  }catch(error){
    console.error("Error fetching user profile", error)
    throw error
  }
}
// Fetch user details
const getUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details', error);
    throw error;
  }
};
// Update user password
const updateUserPassword = async (userId, password) => {
  try {
    const response = await axios.put(`${API_URL}/update-password/${userId}`, { password });
    return response.data;
  } catch (error) {
    console.error('Error updating password', error);
    throw error;
  }
};

// Update user details
const updateUserDetails = async (userId, userDetails) => {
  try {
    const response = await axios.put(`${API_URL}/update-user/${userId}`, userDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating user details', error);
    throw error;
  }
};

// FUNCTION TO HANDLE PROFILE IMAGE UPLOAD
const uploadProfileImage = async (imageUri) => {
  try {
    // Create a FormData object
    const formData = new FormData();

    // Append the image to the form data
    formData.append('profileImage', {
      uri: imageUri,
      type: 'image/jpeg', // Ensure this matches the type your backend expects
      name: 'profile.jpg', // You can adjust this as needed
    });

    console.log("FormData to upload:", formData);

    // Make the request to upload the image
    const response = await axios.put(`${API_URL}/upload-profile-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    console.log("Upload response:", response);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Profile image upload failed with status:" + response.status);
    }
  } catch (error) {
    console.error("Error uploading profile image", error);
    throw error;
  }
};


//FUNCTION TO HANDLE LOGOUT
const logoutUser = async (userId) => {
  try {
    await axios.post(`${API_URL}/logout/${userId}`, {}, { withCredentials: true });
  } catch (error) {
    console.error("Error logging out", error);
    throw error;
  }
};

module.exports = { signUp, login, getUserProfile, uploadProfileImage, getUserDetails,updateUserDetails, updateUserPassword, logoutUser };
