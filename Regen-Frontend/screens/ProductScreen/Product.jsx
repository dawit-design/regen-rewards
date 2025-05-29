import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./Product.style";

const products = [
  { id: 2, image: require("../../assets/images/alec's icecream.webp"), title: 'Product 2' },
  { id: 1, image: require('../../assets/images/chicken bone broth.webp'), title: 'Product 1' },
  { id: 3, image: require('../../assets/images/grass fed beef.webp'), title: 'Product 3' },
  { id: 4, image: require('../../assets/images/oragnic fusili.webp'), title: 'Product 4' },
];

const Product = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>10x Point Products of the Month</Text>
      <Text style={styles.description}>
        Scan a receipt with any of these products by September 30th and earn double the points
      </Text>

      {/* Dynamic Product Images Section */}
      <View style={styles.imageRow}>
        {products.map((product, index) => (
          <View key={product.id} style={styles.imageWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
              style={styles.card}
            >
              <Image source={product.image} style={styles.image} />
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Call to Action */}
      <Text style={styles.ctaText}>View Our Product Page</Text>
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate('ProductPage')}
      >
        <Text style={styles.ctaButtonText}>View Our Product Page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Product;
