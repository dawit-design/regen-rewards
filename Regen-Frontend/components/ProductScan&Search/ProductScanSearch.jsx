import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { styles } from "./ProductScanSearch.Style";

const services = [
  {
    id: '1',
    title: 'Product Barcode Scanning',
    description: 'Scan any product\'s barcode in the grocery store to view its Regen Rewards verified product page.',
    icon: 'barcode',
  },
  {
    id: '2',
    title: 'Search Product Catalogue',
    description: 'Search, browse, and discover regen products using our catalogue of Regen Rewards verified products.',
    icon: 'search',
  },
  {
    id: '3',
    title: 'Meal Plans and Cooking Guides',
    description: 'Get meal plans and cooking guides from our monthly drop of Regen Recipes highlighting how to use our partner brands products in your cooking.',
    icon: 'book',
  },
];

const ProductScanSearch = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {services.map(service => (
          <View key={service.id} style={styles.serviceContainer}>
            <Icon name={service.icon} size={60} color="#28a745" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.description}>{service.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default ProductScanSearch
