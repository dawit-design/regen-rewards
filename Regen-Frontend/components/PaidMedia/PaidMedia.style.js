import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFE8D8",
    padding: 5,
    margin: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 10, // Reduced margin to keep it close to the top
    alignSelf: 'center',
  },
  articleContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: "100%",
    height: 90, 
    borderRadius: 10,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dotted",
    marginVertical: 5,
  },
});
