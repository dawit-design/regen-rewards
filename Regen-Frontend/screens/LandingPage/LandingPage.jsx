import React from "react";
import { styles } from "./LandingPage.style";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/images/Logo.jpg")}
                style={styles.logo}
              />
            </View>
            <Text style={styles.title}>REGEN REWARDS</Text>
            <Text style={styles.subtitle}>
              Get paid for nourishing your body while saving the planet
            </Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>LOG-IN</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.buttonText}>SIGN-UP</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LandingPage;
