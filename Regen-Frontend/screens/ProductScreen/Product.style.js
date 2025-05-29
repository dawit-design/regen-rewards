import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Enable wrapping of items
    justifyContent: 'space-between', // Space between images
    marginBottom: 20,
  },
  imageWrapper: {
    width: width * 0.45, // Adjusted to fit two images in a row
    alignItems: 'center',
    marginBottom: 20, // Ensure spacing below each image
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  buttonText: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: 8,
    borderRadius: 5,
    textAlign: "center",
    width: "100%",
    fontWeight: "bold",
    marginTop: 5,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 50,
  },
  ctaButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
