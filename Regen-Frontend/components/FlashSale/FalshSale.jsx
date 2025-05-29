import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./FlashSale.style"; 

const FlashSales = ({ navigation }) => {
  // Dynamic array for products with image paths and discounts
  const flashSaleProducts = [
    {
      image: require("../../assets/images/pancake + waffle mix.jpg"),
      discount: "20% Off"
    },
    {
      image: require("../../assets/images/chips.webp"),
      discount: "10% Off"
    },
    // You can add more products as needed
  ];

  const handleSeeMore = () => {
    navigation.navigate("DetailedFlashSales"); // Navigate to the detailed page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>72 Hour Regen Rewards Flash Sales</Text>
      <View style={styles.salesContainer}>
        <View style={styles.row}>
          {/* Map over the products array dynamically */}
          {flashSaleProducts.map((product, index) => (
            <View key={index} style={styles.productContainer}>
              <Image source={product.image} style={styles.product} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{product.discount}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSeeMore}>
        <Text style={styles.buttonText}>See More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashSales;
