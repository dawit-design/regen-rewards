import React, { useState, useEffect } from "react";
import {styles} from "./pastReceipts.style"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const PastReceipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceipts = async () => {
      setLoading(true); // Start loading

      try {
        const token = await AsyncStorage.getItem("authToken");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const response = await axios.get(
          "http://192.168.1.159:9000/api/v1/receipts/receipts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("past receipts data", response.data.data)
        const fetchedReceipts = response.data.data.map((receipt) => {
          const {
            storeName = "N/A",
            totalAmount = 0,
            date = new Date().toISOString(),
            recognizedProducts = [],
            rewardPoints,
            _id,
          } = receipt || {};
          const points = response.data.data.rewardPoints;

          const productDetails = recognizedProducts.map(
            ({ farm, product, website }) => ({
              farm: farm || "Unknown",
              product: product || "Unknown",
              website: website || "Unknown",
            })
          );

          return {
            _id,
            storeName,
            totalAmount,
            date,
            recognizedProducts: productDetails,
            rewardPoints,
          };
        });

        setReceipts(fetchedReceipts);
      } catch (error) {
        console.error("Error fetching receipts:", error);
        Alert.alert(
          "Error fetching receipts",
          error.response?.data?.message || "An unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReceipts();
  }, []);

  const deleteReceipt = async (id) => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        throw new Error("No authentication token found");
      }

      await axios.delete(
        `http://192.168.1.159:9000/api/v1/receipts/receipts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state to remove deleted receipt
      setReceipts((prevReceipts) =>
        prevReceipts.filter((receipt) => receipt._id !== id)
      );

      Alert.alert("Success", "Receipt deleted successfully.");
    } catch (error) {
      console.error("Error deleting receipt:", error);
      Alert.alert(
        "Error deleting receipt",
        error.response?.data?.message || "An unexpected error occurred."
      );
    }
  };

  const renderReceiptItem = ({ item }) => {
    return (
      <View style={styles.receiptItem}>
        <Text style={styles.storeName}>{item.storeName}</Text>
        <Text>Total Amount: ${item.totalAmount.toFixed(2)}</Text>
        <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
        <Text>
          Recognized Products:{" "}
          {item.recognizedProducts.map((p) => p.product).join(", ") || "None"}
        </Text>
        <Text>Points Earned: {item.rewardPoints}</Text>
        <Button
          title="Delete"
          color="#ff4444"
          onPress={() => {
            Alert.alert(
              "Delete Receipt",
              "Are you sure you want to delete this receipt?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: () => deleteReceipt(item._id) },
              ]
            );
          }}
        />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={receipts}
        renderItem={renderReceiptItem}
        keyExtractor={(item) =>
          item._id ? item._id.toString() : Math.random().toString()
        }
      />
    </View>
  );
};



export default PastReceipts;
