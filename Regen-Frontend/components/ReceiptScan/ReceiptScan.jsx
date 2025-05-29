import React, { useState } from "react";
import { styles } from "./ReceiptScan.style";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const ReceiptScan = () => {
  const navigation = useNavigation();
  const [receiptImage, setReceiptImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Request permissions and pick image from gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission to access gallery is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setReceiptImage(result.assets[0].uri);
    }
  };

  // Take a picture using the camera
  const takePicture = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera is required!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setReceiptImage(result.assets[0].uri);
    }
  };

  // Upload receipt to backend
  const uploadReceipt = async () => {
    if (!receiptImage) {
      Alert.alert("Please select a receipt image first");
      return;
    }
    setLoading(true);
    let localUri = receiptImage;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append("receipt", { uri: localUri, name: filename, type });

    try {
      const token = await AsyncStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.post(
        "http://192.168.1.159:9000/api/v1/receipts/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const {
        storeName = "N/A",
        totalAmount = 0,
        date,
        recognizedProducts,
      } = response.data.data.newReceipt;
      const rewardPoints = response.data.data.rewardPoints;

      const productDetails = recognizedProducts.map(
        ({ farm, product, website }) => ({
          farm,
          product,
          website,
        })
      );

      // Show success alert instead of setting success state
      Alert.alert("Success", "Receipt uploaded successfully!", [
        {
          text: "OK",
          onPress: () => {
            // Clear the receipt image after successful upload
            setReceiptImage(null);
            // Navigate after the user acknowledges the alert
            navigation.navigate("ReceiptDetails", {
              storeName,
              totalAmount,
              date,
              recognizedProducts: productDetails,
              rewardPoints,
            });
          },
        },
      ]);
    } catch (error) {
      Alert.alert(
        "Error uploading receipt",
        error.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("PastReceipts")}>
          <Text style={styles.scanHistory}>Scan History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option} onPress={pickImage}>
              <Icon name="photo-library" size={24} color="#000" />
              <Text style={styles.optionText}>Pick Receipt Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={takePicture}>
              <Icon name="camera-alt" size={24} color="#000" />
              <Text style={styles.optionText}>Take a Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={takePicture}>
              <Icon name="email" size={24} color="#000" />
              <Text style={styles.optionText}>From Your Email</Text>
            </TouchableOpacity>
          </View>

          {receiptImage && (
            <Image source={{ uri: receiptImage }} style={styles.image} />
          )}

          <Button
            title="Upload Receipt"
            onPress={uploadReceipt}
            disabled={loading}
          />
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007BFF" />
            <Text>Uploading receipt...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ReceiptScan;
