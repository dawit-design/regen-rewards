// secondPaidAd.style.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {

    borderRadius: 10,
    padding: 5,
    margin: 10,
    backgroundColor: "#fff" // Reduced bottom padding for less empty space
  },
  headerContainer: {
    marginBottom: 8,  // Reduced margin for more compact space
    alignItems: 'center',

  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  stickyNote: {
    backgroundColor: '#D3D3D3',  // Sticky note yellow
    padding: 10,  // Reduced padding to reduce size
    margin: 8,  // Reduced margin around sticky note
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,  // Slightly reduced elevation for less depth
    width: '50%',
    alignItems: 'center',
    borderRadius: "50%",
  },
  paidAdText: {
    fontSize: 14,  // Adjusted to a slightly smaller size
    color: '#333',
  },
  learnMoreText: {
    marginBottom: 3,  // Reduced bottom margin to make it tighter
    fontSize: 20,  // Reduced font size for a more compact look
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  imagesContainer: {
    alignItems: "center",  // Center images in the container
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",  // Space out images evenly
    width: "100%",
    marginBottom: 8,  // Reduced margin between image rows
  },
  rowImage: {
    width: "32%",  // Each image takes about 1/3 of the width
    height: 140,  // Slightly reduced height
    borderRadius: 5,
  },
  fullWidthImage: {
    width: "100%",
    height: 140,  // Slightly reduced height for full-width image
    resizeMode: 'contain'
  },
});
