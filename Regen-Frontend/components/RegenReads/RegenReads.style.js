import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "#EFE8D8",
    // padding: 10,
    // paddingBottom: 20,
    // justifyContent: 'center',
    // alignItems: "center", 
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
   
  },
  featuredStories: {
    fontSize: 16,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  articleContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    margin: 10,
    alignItems: "center", 
    justifyContent: 'center',
  },
  topImage: {
    width: "100%",
    height: 90, // Set a shorter height for the top image
    borderRadius: 10,
    marginBottom: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 22,
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dotted",
    marginVertical: 5,
  },
});
