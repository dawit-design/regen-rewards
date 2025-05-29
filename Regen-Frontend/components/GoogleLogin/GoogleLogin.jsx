import React, { useState, useEffect } from "react";
import { Button, View, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { googleLogin } from "../../services/authService";

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "process.env.IOS_CLIENT_ID",  // Replace with your actual iOS Client ID
    webClientId: "process.env.WEB_CLIENT_ID",  // Replace with your actual Web Client ID
    scopes: ["profile", "email"],
    redirectUri: " https://a269-100-1-85-106.ngrok-free.app/auth/google/callback", // Specify the ngrok URL
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      handleSignInWithGoogle(authentication);
    }
  }, [response]);

  const handleSignInWithGoogle = async (authentication) => {
    try {
      const idToken = authentication.id_token; // Use the id_token from the authentication object
      const result = await googleLogin({ idToken });

      // Store token in Async Storage
      await AsyncStorage.setItem("token", result.token);

      // Navigate to Home screen
      navigation.navigate("Home");
    } catch (error) {
      console.error("Google login error", error);
      Alert.alert("Error", "Google login failed");
    }
  };

  return (
    <View>
      <Button
        title="Sign In with Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
    </View>
  );
};

export default GoogleLogin;
