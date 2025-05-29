import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, TextInput, Button, Alert, Text } from "react-native";
WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    // androidClientId: "process.env.SESSION_SECRET",
    iosClientId: "process.env.IOS_CLIENT_ID",
    webClientId: "process.env.WEB_CLIENT_ID",
  });

  async function handleSignInWithGoogle() {
    await AsyncStorage.getItem()
  }
  return (
    <View>
      <Button title="sign in with Google" onPress={promptAsync} />
    </View>
  );
};

export default GoogleLogin;
