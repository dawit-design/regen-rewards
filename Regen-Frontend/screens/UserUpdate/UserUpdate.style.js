import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      marginTop: 15,
      padding: 12,
      backgroundColor: '#007bff',
      borderRadius: 8,
    },
    buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '600',
    },
  });