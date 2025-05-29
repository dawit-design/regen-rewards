import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Animated,
  Alert,
} from "react-native";
import { styles } from "./Navbar.style";
import { getUserProfile, logoutUser } from "../../services/authService";
import Icon from "react-native-vector-icons/FontAwesome";
import { Tooltip } from "react-native-elements";

const Navbar = ({ navigation, onLogout }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        if (profile && profile.data && profile.data.data) {
          setUser(profile.data.data);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Error fetching user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setMenuVisible(false); // Close menu when navigating away
    });

    return unsubscribe; // Cleanup listener on unmount
  }, [navigation]);

  const handleLogout = async () => {
    console.log("Logout button pressed");
    try {
      if (user && user._id) {
        await logoutUser(user._id);  // Pass user ID to the logout function
        navigation.navigate("Login");
      } else {
        Alert.alert("Logout Error", "User ID not found. Please try again.");
      }
    } catch (error) {
      Alert.alert("Logout Error", "Failed to logout. Please try again.");
    }
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderMenu = () => {
    const menuTranslateX = menuAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0],
    });

    return (
      <Animated.View
        style={[
          styles.menuContainer,
          { transform: [{ translateX: menuTranslateX }] },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfile")}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>User Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UserDetails", { userId: user._id })
          }
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutText}>
            <Text style={styles.menuText}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutIcon}>
            <Icon name="sign-out" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={toggleMenu} style={styles.menuItem}>
          <Text style={styles.menuText}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <View style={styles.header}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.header}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../../assets/images/Logo.jpg")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      {menuVisible && renderMenu()}
    </View>
  );
};

export default Navbar;
