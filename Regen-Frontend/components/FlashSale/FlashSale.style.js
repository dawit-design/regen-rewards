import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    backgroundColor: "#fff", // Softer background color
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#333", 
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', // Subtle background to make the header stand out
    borderRadius: 10,
    elevation: 5, // Subtle shadow for the header
  },
  salesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  productContainer: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Shadow for product cards
    padding: 10,
  },
  product: {
    width: '100%',
    height: 120,
    borderRadius: 8, // Rounded corners for product images
    marginBottom: 10,
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#A8CFC4', // More vibrant badge color
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  discountText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007BFF', // Gradient effect could be added here
    padding: 15,
    borderRadius: 30,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 4, // Shadow for the button
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
