import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  stackedImagesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  stackedImage: {
    height: 100, // Fixed height for each image
    marginBottom: -67, // Adjusted negative margin for overlap
    resizeMode: 'contain', // Ensure full visibility of the image
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  image: {
    width: (Dimensions.get('window').width - 80) / 3,
    height: 150,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  headerContainer: {
    marginBottom: 10,
    alignItems: 'center', // Center align the header content
  },
  stickyNote: {
    backgroundColor: '#D3D3D3', // Sticky note yellow color
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds depth to the sticky note
    width: '50%', // Ensure it stretches across the container
    alignItems: 'center',
    borderRadius: "50%", // Center align text inside the sticky note
  },
  paidAdText: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: '#333', // Dark color for visibility
  },
  learnMoreText: {
    marginBottom: 3,
    fontSize: 20,
    color: '#007BFF', // Same color for uniformity
    textDecorationLine: 'underline', // Underline for a clickable effect
  },
});
