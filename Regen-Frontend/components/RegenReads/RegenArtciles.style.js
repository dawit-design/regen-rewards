import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 0,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: 'center',
    alignItems: "center", 
  },
  topImage: {
    width: "100%",
    height: 100, 
    resizeMode: 'contain',
    marginTop: 12,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  articleContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    paddingBottom: 20,
    alignItems: "center", 
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,          // Ensures the header takes full width of the container
  },
  subHeader: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,         // Ensures the subheader takes full width of the container
  },
  date: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,         // Ensures the date takes full width of the container
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    justifyContent: 'left'  ,     // Ensures the body text takes full width of the container
    textAlign: "left",      // Aligns body text content to the left 
  },
});
