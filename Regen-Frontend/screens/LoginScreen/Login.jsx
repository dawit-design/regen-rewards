import React, { useState } from "react";
import { styles } from "./Login.style";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { login } from "../../services/authService";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      Alert.alert("Success", "Login successful");

      const storedToken = await AsyncStorage.getItem("authToken");

      navigation.navigate("Home");
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert(
        "Error",
        `Login failed: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    // Dismiss the keyboard when touching outside the inputs
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Logo.jpg")}
          style={styles.logo}
        />
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Access your account to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email.toLowerCase()}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          autoCompleteType="off" // For older React Native versions
          autoComplete="off" // For newer React Native versions
          textContentType="none"
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <GoogleLogin navigation={navigation} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.linkWrapper}
          >
            <Text style={styles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
