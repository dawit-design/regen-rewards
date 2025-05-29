// LinkedBankAccount.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {styles} from "./LinkedAccount.style"
const LinkedBankAccount = () => {
  // Hardcoded bank account data
  const accountData = {
    accountName: 'John Doe',
    bankName: 'ABC Bank',
    accountNumber: '1234 5678 9012 3456',
    accountType: 'Checking',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linked Bank Account</Text>
      <View style={styles.accountContainer}>
        <Text style={styles.label}>Account Holder:</Text>
        <Text>{accountData.accountName}</Text>

        <Text style={styles.label}>Bank Name:</Text>
        <Text>{accountData.bankName}</Text>

        <Text style={styles.label}>Account Number:</Text>
        <Text>{accountData.accountNumber}</Text>

        <Text style={styles.label}>Account Type:</Text>
        <Text>{accountData.accountType}</Text>
      </View>
    </View>
  );
};


export default LinkedBankAccount;
