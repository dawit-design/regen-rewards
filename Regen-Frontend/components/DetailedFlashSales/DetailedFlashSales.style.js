import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Softer background color
    paddingVertical: 20,
  },
  header: {
    fontSize: 20, // Larger font for header
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center', // Center-align header
    color: '#333', // Darker text color for contrast
  },
  salesContainer: {
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center', // Center container on screen
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productContainer: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 12, // Softer rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 20,
    padding: 15, // Extra padding for spacing
    alignItems: 'center',
  },
  product: {
    width: '100%',
    height: 160, // Slightly taller image
    borderRadius: 10,
    marginBottom: 10, // Space between image and discount badge
  },
  discountBadge: {
    backgroundColor: '#A8CFC4', // Bolder red for discounts
    borderRadius: 5,
    padding: 6,
    marginVertical: 10,
  },
  discountText: {
    color: '#fff',
    fontSize: 15, // Larger discount text
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#D3D3D3',// Green for action buttons
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonAlt: {
    backgroundColor: '#007bff', // Blue for secondary buttons
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextPurchase: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
