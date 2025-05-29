import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./DetailedFlashSales.style"; 

const DetailedFlashSales = () => {
  // Dynamic array for flash sale products
  const flashSaleProducts = [
    { source: require("../../assets/images/pancake + waffle mix.jpg"), discount: "20% Off" },
    { source: require("../../assets/images/chips.webp"), discount: "10% Off" },
    { source: require("../../assets/images/almond.webp"), discount: "15% Off" },
    { source: require("../../assets/images/red quinoa.webp"), discount: "10% Off" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>72 Hour Regen Rewards Flash Sales</Text>
      <View style={styles.salesContainer}>
        <View style={styles.row}>
          {flashSaleProducts.map((product, index) => (
            <View style={styles.productContainer} key={index}>
              <Image source={product.source} style={styles.product} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{product.discount}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTextPurchase}>Purchase Here</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonAlt}>
                <Text style={styles.buttonText}>Product Page</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailedFlashSales;
