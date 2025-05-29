import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EFE8D8',
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  scanHistory: {
    fontSize: 18,
    color: "#007BFF", 
    fontWeight: "bold",
    right: 0
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center", 
    paddingTop: 20,
    width: "100%", 
  },
  cardContainer: {
    width: "90%", 
    padding: 20,
    backgroundColor: "#fff", 
    borderRadius: 15, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1, 
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 15, 
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  image: {
    width: "100%", 
    height: 250,
    borderRadius: 10,
  },
  imageButtonContainer: {
    alignItems: 'center',  
    marginVertical: 20,    
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
});

