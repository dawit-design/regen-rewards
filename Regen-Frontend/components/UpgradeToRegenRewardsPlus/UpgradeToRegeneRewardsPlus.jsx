import { styles } from "./UpgradeToRgeneRewardsPlus.style";
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinkedBankAccount from '../LinkedAccount/LinkedAccount';

const UpgradeToRewardsPlus = () => {
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [showSubscriptionOptions, setShowSubscriptionOptions] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', cardHolder: '', expiryDate: '' });

  const linkedAccountData = {
    accountName: 'John Doe',
    bankName: 'ABC Bank',
    accountNumber: '1234 5678 9012 3456',
    accountType: 'Checking',
  };

  const handleUpgrade = () => {
    if (selectedPlan && (selectedPaymentMethod || selectedPaymentMethod === 'Linked Bank Account') && 
        (selectedPaymentMethod !== 'Linked Bank Account' ? cardDetails.cardNumber : true)) {
      Alert.alert('Payment Success', `You have successfully upgraded to ${selectedPlan} plan!`);
      setIsUpgraded(true);
      resetForm();
    } else {
      Alert.alert('Missing Information', 'Please select a plan and enter required payment details.');
    }
  };

  const resetForm = () => {
    setSelectedPlan(null);
    setSelectedPaymentMethod(null);
    setCardDetails({ cardNumber: '', cardHolder: '', expiryDate: '' });
    setShowSubscriptionOptions(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade to Regen Rewards Plus</Text>

      {!isUpgraded ? (
        <View style={styles.upgradeContainer}>
          <Text style={styles.description}>
            Unlock exclusive rewards and benefits by upgrading to Regen Rewards Plus.
          </Text>

          <Button title="Unlock Premium Features" onPress={() => setShowSubscriptionOptions(true)} />

          <Modal
            visible={showSubscriptionOptions}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.optionTitle}>Select a Subscription Plan:</Text>
                <Button title="Basic Plan - $9.99/month" onPress={() => setSelectedPlan('Basic Plan')} />
                <Button title="Pro Plan - $19.99/month" onPress={() => setSelectedPlan('Pro Plan')} />
                <Button title="Premium Plan - $29.99/month" onPress={() => setSelectedPlan('Premium Plan')} />

                {selectedPlan && (
                  <>
                    <Text style={styles.selectedPlanText}>You selected: {selectedPlan}</Text>

                    <Text style={styles.optionTitle}>Select Payment Method:</Text>
                    <View style={styles.paymentMethods}>
                    <TouchableOpacity
  style={styles.paymentOption}
  onPress={() => setSelectedPaymentMethod('Credit')}
>
  <Icon name="credit-card" size={24} color="#000" />
  <Text style={styles.paymentText}>Credit Card</Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.paymentOption}
  onPress={() => setSelectedPaymentMethod('Debit')}
>
  <Icon name="credit-card" size={24} color="#000" />
  <Text style={styles.paymentText}>Debit Card</Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.paymentOption}
  onPress={() => setSelectedPaymentMethod('LinkedAccount')}
>
  <Icon name="bank" size={24} color="#000" />
  <Text style={styles.paymentText}>Linked Bank Account</Text>
</TouchableOpacity>
                    </View>

                    {selectedPaymentMethod === 'Linked Bank Account' ? (
                      <LinkedBankAccount accountData={linkedAccountData} />
                    ) : (
                      selectedPaymentMethod && (
                        <>
                          <TextInput
                            style={styles.input}
                            placeholder="Card Number"
                            value={cardDetails.cardNumber}
                            onChangeText={(text) => setCardDetails({ ...cardDetails, cardNumber: text })}
                            keyboardType="numeric"
                          />
                          <TextInput
                            style={styles.input}
                            placeholder="Card Holder Name"
                            value={cardDetails.cardHolder}
                            onChangeText={(text) => setCardDetails({ ...cardDetails, cardHolder: text })}
                          />
                          <TextInput
                            style={styles.input}
                            placeholder="Expiry Date (MM/YY)"
                            value={cardDetails.expiryDate}
                            onChangeText={(text) => setCardDetails({ ...cardDetails, expiryDate: text })}
                          />
                          <Button title="Confirm Upgrade" onPress={handleUpgrade} />
                        </>
                      )
                    )}
                  </>
                )}

                <Button title="Close" onPress={resetForm} />
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View style={styles.successContainer}>
          <Text style={styles.successMessage}>You are now a Regen Rewards Plus member!</Text>
        </View>
      )}
    </View>
  );
};

export default UpgradeToRewardsPlus;
