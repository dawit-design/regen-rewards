import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"; 
import { styles } from "./Footer.style";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* Regen Reads Section */}
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('RegenReads')}>
          <View style={styles.iconsContainer}>
            <Icon name="book" size={24} color="rgba(51, 51, 51, 0.4)" style={styles.watermarkIcon} />
            <Text style={styles.footerText}>Regen Reads</Text>
            <Text style={styles.footerText}>Stories</Text>
          </View>
        </TouchableOpacity>

        {/* Prominent Scan Receipt Button with Lines */}
        <View style={styles.mainFooterWrapper}>
          <View style={styles.lineLeft} />
          
          <View style={styles.scanButtonWrapper}>
            <TouchableOpacity style={styles.mainFooterItem} onPress={() => navigation.navigate('ReceiptScan')}>
              <Icon name="receipt" size={24} color="#333" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.scanText}>Scan Receipt</Text> 
          </View>

          <View style={styles.lineRight} />
        </View>

        {/* Product Scan Section */}
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('ProductScan')}>
          <View style={styles.iconsContainer}>
            <Icon name="search" size={24} color="rgba(51, 51, 51, 0.4)" style={styles.watermarkIcon} />
            <Text style={styles.footerText}>Product Scan</Text>
            <Text style={styles.footerText}>& Search</Text>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

export default Footer;
