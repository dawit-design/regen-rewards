import React from "react";
import { View } from "react-native";
import Navbar from "./NavBar";

const withNavbar = (Component) => {
  return ({ navigation, ...props }) => (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <Component navigation={navigation} {...props} />
    </View>
  );
};

export default withNavbar;

