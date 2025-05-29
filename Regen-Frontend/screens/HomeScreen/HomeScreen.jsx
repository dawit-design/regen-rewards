import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";
import Navbar from "../../components/Navbar/NavBar";
import PaidMedia from "../../components/PaidMedia/PaidMedia";
import FlashSales from "../../components/FlashSale/FalshSale";
import PaidAd from "../../components/PaidAd/PaidAd"; // Import first ad
import SecondPaidAd from "../../components/PaidAd/SecondPaidAd"; // Import second ad
import { logoutUser } from "../../services/authService";
import { styles } from "./HomeScreen.style";

const HomeScreen = ({ navigation }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const images = [
    require("../../assets/images/alec's icecream.webp"),
    require("../../assets/images/chicken bone broth.webp"),
    require("../../assets/images/grass fed beef.webp"),
    require("../../assets/images/oragnic fusili.webp"),
  ];

  const handleLogout = async () => {
    try {
      await logoutUser(); // Attempt to log out
      setIsNavigating(true); // Set navigating to true
      navigation.navigate("Login"); // Navigate to Login screen
    } catch (error) {
      Alert.alert("Logout Error", "Failed to logout. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      setIsNavigating(true);
    };
  }, []);

  // Render item for FlatList
  const renderItem = () => (
    <View>
      <Text style={styles.points}>10x Points this month!</Text>

      {/* Horizontal ScrollView for images */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Product")}
            style={styles.imageWrapper}
          >
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.imageScrollContent}
      />

      <View style={styles.sectionSpacing}>
        <PaidMedia />
      </View>

      {/* First Paid Ad */}
      <View style={styles.sectionSpacing}>
        <PaidAd />
      </View>

      {/* Flash Sales */}
      <View style={styles.sectionSpacing}>
        <FlashSales navigation={navigation} />
      </View>

      {/* Second Paid Ad */}
      <View style={styles.sectionSpacing}>
        <SecondPaidAd />
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} onLogout={handleLogout} /> 

      {/* Use FlatList for vertical scrolling */}
      <FlatList
        data={[{ key: "content" }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollContent}
      />
    </View>
  );
};

export default HomeScreen;
