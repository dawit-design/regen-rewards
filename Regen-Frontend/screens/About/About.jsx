import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { styles } from "./About.style";

const services = [
  {
    id: '1',
    title: 'Product Barcode Scanning',
    description: 'Scan any product\'s barcode in the grocery store to see if we have a Regen Rewards verified product page and to learn more about each product.',
    icon: 'barcode',
  },
  {
    id: '2',
    title: 'Regen Rewards Plus',
    description: 'Browse or search using our catalogue of Regen Rewards verified products.',
    icon: 'star',
  },
  {
    id: '3',
    title: 'Meal Plans and Cooking Guides',
    description: 'Get meal plans and cooking guides from our monthly drops of Regen Recipes.',
    icon: 'book',
  },
];

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Services</Text>
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

export default AboutScreen;
