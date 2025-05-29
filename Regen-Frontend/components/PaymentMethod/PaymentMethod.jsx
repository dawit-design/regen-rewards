import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./PaymentMethod.style";

const PaymentMethod = () => {
  // Hardcoded payment method data
  const paymentMethod = {
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Bryan Molk',
    expiryDate: '12/25',
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardHolder, setNewCardHolder] = useState('');
  const [newExpiryDate, setNewExpiryDate] = useState('');

  const handleAddPaymentMethod = () => {
    setModalVisible(true);
  };

  const handleSavePaymentMethod = () => {
    // Logic to save the payment method goes here
    Alert.alert('Payment Method Added', 'Your new payment method has been added successfully!');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>

      <View style={styles.paymentContainer}>
        <Text style={styles.label}>Card Holder:</Text>
        <Text style={styles.value}>{paymentMethod.cardHolder}</Text>

        <Text style={styles.label}>Card Number:</Text>
        <Text style={styles.value}>{paymentMethod.cardNumber}</Text>

        <Text style={styles.label}>Expiry Date:</Text>
        <Text style={styles.value}>{paymentMethod.expiryDate}</Text>
      </View>

      <Button title="Add Payment Method" onPress={handleAddPaymentMethod} />

      {/* Modal for adding a new payment method */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add New Payment Method</Text>

            <TextInput
              style={styles.input}
              placeholder="Card Holder"
              value={newCardHolder}
              onChangeText={setNewCardHolder}
            />
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              value={newCardNumber}
              onChangeText={setNewCardNumber}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Date (MM/YY)"
              value={newExpiryDate}
              onChangeText={setNewExpiryDate}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleSavePaymentMethod}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentMethod;
