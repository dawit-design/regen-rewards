import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReceiptDetails = ({ route }) => {
  const {
    storeName,
    totalAmount,
    date,
    recognizedProducts,
    rewardPoints,
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Receipt Details</Text>
        <Text style={styles.label}>
          Store Name: <Text style={styles.value}>{storeName || "N/A"}</Text>
        </Text>
        <Text style={styles.label}>
          Total Amount:{" "}
          <Text style={styles.value}>${(totalAmount || 0).toFixed(2)}</Text>
        </Text>
        <Text style={styles.label}>
          Date:{" "}
          <Text style={styles.value}>
            {date ? new Date(date).toLocaleDateString() : "N/A"}
          </Text>
        </Text>
        <Text style={styles.label}>Recognized Products:</Text>
        {recognizedProducts.length > 0 ? (
          recognizedProducts.map((product, index) => (
            <Text key={product._id || index} style={styles.value}>
              {product.product} from {product.farm}
            </Text>
          ))
        ) : (
          <Text style={styles.value}>None</Text>
        )}
        <Text style={styles.label}>
          Points Earned: <Text style={styles.value}>{rewardPoints || 0}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0", // Light background for contrast
  },
  card: {
    flex: 1, // Take most of the available space
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff", // White background for the card
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow
    justifyContent: "center", // Center content vertically
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center", // Center header text
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  value: {
    fontWeight: "bold",
  },
});

export default ReceiptDetails;
