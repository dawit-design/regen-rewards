import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUserProfile, uploadProfileImage } from "../../services/authService";
import { styles } from "./UserProfile.style";

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCashInModalVisible, setCashInModalVisible] = useState(false);
  const [isShareModalVisible, setShareModalVisible] = useState(false);
  const [cashInAmount, setCashInAmount] = useState("");
  const [totalPoints, setTotalPoints] = useState(0); // Initial value set to 0
  const [image, setImage] = useState(null);
  const [newRewardPoints, setNewRewardPoints] = useState(0); // To hold the new reward points from backend

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        console.log(
          "response user profile",
          response.data.data.totalRewardPoints
        );
        if (response && response.data && response.data.data) {
          setUser(response.data.data);
          setTotalPoints(response.data.data.totalRewardPoints || 0); // Fetch totalPoints from the backend
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    // Whenever newRewardPoints changes, update totalPoints
    if (newRewardPoints > 0) {
      setTotalPoints((prevPoints) => prevPoints + newRewardPoints);
      setNewRewardPoints(0); // Reset after adding
    }
  }, [newRewardPoints]);

  const toggleCashInModal = () => {
    if (isCashInModalVisible) {
      setCashInAmount("");
    }
    setCashInModalVisible(!isCashInModalVisible);
  };

  const toggleShareModal = () => {
    setShareModalVisible(!isShareModalVisible);
  };
  // HANDLE CASH IN
  const handleCashIn = async () => {
    const amount = parseFloat(cashInAmount);
    if (isNaN(amount) || amount <= 0 || amount > totalPoints) {
      Alert.alert("Invalid input", "Please enter a valid amount to cash in.");
      return;
    }

    const token = await AsyncStorage.getItem("authToken");
    if (!token) {
      Alert.alert("Error", "You must be logged in to cash in points.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.159:9000/api/v1/cash-in-points",
        {
          pointsToCashIn: amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming the response contains the remaining points
      const { remainingPoints } = response.data;

      // Update total points with the remaining points from the response
      setTotalPoints(remainingPoints);

      // Clear the input field after successful cash-in
      setCashInAmount("");

      // Close the cash-in modal
      toggleCashInModal();

      // Show success message
      Alert.alert(
        "Success",
        `Successfully cashed in ${amount} points for $${(amount * 0.01).toFixed(
          2
        )}`
      );
    } catch (error) {
      console.error("Error during cash in:", error.message || error);
      Alert.alert("Error", "Failed to cash in points. Please try again.");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);

      try {
        const uploadResponse = await uploadProfileImage(imageUri);
        console.log("Upload response:", uploadResponse);
        if (
          uploadResponse &&
          uploadResponse.data &&
          uploadResponse.data.profileImage
        ) {
          setUser((prevUser) => ({
            ...prevUser,
            profileImage: uploadResponse.data.profileImage,
          }));
        } else {
          console.error("Upload response does not contain profileImage");
        }
      } catch (error) {
        console.error("Error uploading profile image", error);
      }
    } else {
      console.error("No image selected or result is canceled");
    }
  };

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const fullNames = fullName.split(" ");
    const initials = fullNames.map((n) => n.charAt(0).toUpperCase()).join("");
    return initials;
  };

  const handleShare = (platform) => {
    console.log(`Sharing on ${platform}`);
    // Implement actual sharing functionality here
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00f" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {user ? (
        <View style={styles.profileContainer}>
          {/* User Profile Section */}
          <Text style={styles.title}>User Profile</Text>
          <View style={styles.profileImageContainer}>
            {image || user.profileImage ? (
              <Image
                source={{
                  uri: image || user.profileImage,
                }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.circleContainer}>
                <View style={styles.initialsCircle}>
                  <Text style={styles.initialsText}>
                    {getInitials(user.fullName)}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <Button title="Change Profile Picture" onPress={pickImage} />
          <View style={styles.buttonContainer}>
            <Button
              title="Account Details"
              onPress={() =>
                navigation.navigate("UserDetails", { userId: user._id })
              }
              color="#28A745"
            />
          </View>

          {/* Lifetime Points and Avatar Section */}
          <View style={styles.scanProfileContainer}>
            <View style={styles.circleContainer}>
              <Text style={styles.nameText}>{user.fullName}</Text>
              <Text style={styles.statusText}>Regen Ready</Text>
            </View>
            <View style={styles.circleContainer}>
              <Text style={styles.circleText}>
                Lifetime Points {"\n"}
                {totalPoints}
              </Text>
            </View>
            <View style={styles.updateButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("UpdateAvatar")}
                style={styles.updateButton}
              >
                <Text style={styles.updateButtonText}>Update Avatar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Status Section */}
          <View style={styles.statusSection}>
            <View style={styles.statusRow}>
              <View style={styles.statusCircleContainer}>
                <Text style={styles.statusHeader}>Current Status</Text>
                <View style={styles.statusCircleCurrent}>
                  <Text style={styles.statusCircleText}>Regen Ready</Text>
                </View>
              </View>
              <Icon
                name="arrow-right"
                size={40}
                color="#007bff"
                style={styles.arrowIcon}
              />
              <View style={styles.statusCircleContainer}>
                <Text style={styles.nextStatusHeader}>Next Status</Text>
                <View style={styles.statusCircleNext}>
                  <Text style={styles.statusCircleText}>@ 10,000 pts</Text>
                  <Text style={styles.statusCircleText}>Regen Rowdy</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={toggleShareModal}
            >
              <Text style={styles.shareButtonText}>
                Share your regen status on social media
              </Text>
            </TouchableOpacity>
          </View>

          {/* Total Points Section */}
          <View style={styles.totalPointsSection}>
            <View style={styles.totalPointsContainer}>
              <Text style={styles.totalPointsHeader}>Total Points</Text>
              <Text style={styles.totalPointsText}>
                {totalPoints} {"\n"}(${(totalPoints * 0.01).toFixed(2)})
              </Text>
            </View>
            <TouchableOpacity
              style={styles.cashInButton}
              onPress={toggleCashInModal}
            >
              <Text style={styles.cashInButtonText}>CASH IN POINTS</Text>
              <Text style={styles.cashInButtonSubText}>
                Transfer ${(totalPoints * 0.01).toFixed(2)} to your bank
                account?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Links Section */}
          <View style={styles.linksContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TransactionHistory")}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>Transfer History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LinkedBankAccount")}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>Linked Bank Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("UpgradeToRewardsPlus")}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>Upgrade to Rewards Plus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentMethod")}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>Payment Method</Text>
            </TouchableOpacity>
          </View>

          {/* Modals */}
          <Modal
            visible={isCashInModalVisible}
            animationType="slide"
            transparent
            onRequestClose={toggleCashInModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Cash In Points</Text>
                <TextInput
                  style={styles.modalInput}
                  keyboardType="numeric"
                  placeholder="Enter amount"
                  value={cashInAmount}
                  onChangeText={setCashInAmount}
                />
                <Button title="Submit" onPress={handleCashIn} />
                <Button title="Cancel" onPress={toggleCashInModal} />
              </View>
            </View>
          </Modal>

          <Modal
            visible={isShareModalVisible}
            animationType="slide"
            transparent
            onRequestClose={toggleShareModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Share Your Profile</Text>
                <Button
                  title="Share on Facebook"
                  onPress={() => handleShare("Facebook")}
                />
                <Button
                  title="Share on Twitter"
                  onPress={() => handleShare("Twitter")}
                />
                <Button
                  title="Share on Instagram"
                  onPress={() => handleShare("Instagram")}
                />
                <Button title="Cancel" onPress={toggleShareModal} />
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <Text style={styles.errorText}>User profile not found.</Text>
      )}
    </ScrollView>
  );
};

export default UserProfile;
