import React from 'react';
import { Button } from 'react-native';
// import { useFacebookLogin } from 'react-facebook-login'; // Using Facebook SDK for web login
import { facebookLogin } from '../../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FacebookLogin = ({ navigation }) => {
  const { login } = useFacebookLogin({
    appId: 'process.env.FACEBOOK_CLIENT_APP_ID',
    callback: async (response) => {
      if (response.status === 'connected') {
        try {
          const { data } = await facebookLogin({ accessToken: response.accessToken });

          // Store token
          await AsyncStorage.setItem('token', data.token);

          // Navigate to another screen
          navigation.navigate('Home'); // Assuming 'Home' is the post-login screen
        } catch (error) {
          console.error('Facebook login failed', error);
        }
      } else {
        console.log('Facebook login cancelled');
      }
    },
  });

  return <Button title="Sign In with Facebook" onPress={login} />;
};

export default FacebookLogin;
