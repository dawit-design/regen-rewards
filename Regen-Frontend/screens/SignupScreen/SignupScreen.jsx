import React, { useState } from "react";
import { styles } from "./SignupScreen.style";
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signUp } from "../../services/authService";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await signUp({ fullName, email, password });
      if (response) {
        Alert.alert("Success", "Signup successful");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", `Signup failed: ${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {/* Dismiss keyboard when touching outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("../../assets/images/Logo.jpg")}
            style={styles.logo}
          />
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Create your account to start using the app
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            autoCompleteType="off"
            textContentType="password"
            returnKeyType="next"
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.passwordInput}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCompleteType="off"
            textContentType="password"
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignup}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <GoogleLogin navigation={navigation} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Already a member? Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
