import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import { styles } from './ScanHistory.style'; // Ensure this file is updated accordingly

const { width } = Dimensions.get('window');

const ScanHistory = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
      </View>

      {/* Lifetime Points and Avatar Section */}
      <View style={styles.profileContainer}>
        <View style={styles.circleContainer}>
          <Text style={styles.nameText}>Bryan Molk</Text>
          <Text style={styles.statusText}>Regen Ready</Text>
        </View>
        <View style={styles.circleContainer}>
          <Text style={styles.circleText}>Lifetime Points {'\n'}9,204</Text>
        </View>
        <View style={styles.updateButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('UpdateAvatar')} style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Avatar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Status Section with Arrow */}
      <View style={styles.statusSection}>
        <View style={styles.statusRow}>
          <View style={styles.statusCircleContainer}>
            <Text style={styles.statusHeader}>Current Status</Text>
            <View style={styles.statusCircleCurrent}>
              <Text style={styles.statusCircleText}>Regen Ready</Text>
            </View>
          </View>
          <Icon name="arrow-right" size={40} color="#007bff" style={styles.arrowIcon} />
          <View style={styles.statusCircleContainer}>
            <Text style={styles.nextStatusHeader}>Next Status at 10,000 pts</Text>
            <View style={styles.statusCircleNext}>
              <Text style={styles.statusCircleText}>Regen Rowdy</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share on Social Media</Text>
        </TouchableOpacity>
      </View>

      {/* Total Points Section */}
      <View style={styles.totalPointsSection}>
        <View style={styles.totalPointsContainer}>
          <Text style={styles.totalPointsHeader}>Total Points</Text>
          <Text style={styles.totalPointsText}>3,062 {'\n'}($30.62)</Text>
        </View>
        <TouchableOpacity style={styles.cashInButton}>
          <Text style={styles.cashInButtonText}>CASH IN POINTS</Text>
          <Text style={styles.cashInButtonSubText}>Transfer $30.62 to your bank account?</Text>
        </TouchableOpacity>
      </View>

      {/* Links Section */}
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LinkedBankAccount')} style={styles.linkButton}>
          <Text style={styles.linkText}>Linked Bank Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpgradeToRewardsPlus')} style={styles.linkButton}>
          <Text style={styles.linkText}>Upgrade to Regen Rewards Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')} style={styles.linkButton}>
          <Text style={styles.linkText}>Payment Method</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ScanHistory;
