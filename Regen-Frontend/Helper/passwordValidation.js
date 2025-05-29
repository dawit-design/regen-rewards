import { Alert } from 'react-native';

export const validateSignup = (fullName, email, password, confirmPassword) => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return false;
    }
  
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format');
      return false;
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 8 characters long, include one capital letter, one lowercase letter, one number, and one special character'
      );
      return false;
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return false;
    }
  
    return true;
  };
  


export const validateLogin = (email, password) => {
  let valid = true;

  if (!email) {
    Alert.alert('Validation Error', 'Email is required');
    valid = false;
  } else {
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format');
      valid = false;
    }
  }

  if (!password) {
    Alert.alert('Validation Error', 'Password is required');
    valid = false;
  }

  return valid;
};

