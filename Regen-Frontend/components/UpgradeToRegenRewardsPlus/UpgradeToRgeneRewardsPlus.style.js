import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  upgradeContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
    justifyContent: 'flex-start',
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedPlanText: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  successContainer: {
    backgroundColor: '#e0ffe0',
    padding: 20,
    borderRadius: 10,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Change to space-around for even spacing
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'column', // Change to column for vertical stacking
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  paymentText: {
    marginTop: 5, // Add margin at the top for spacing between icon and text
    fontSize: 16,
  },
});
