import { StyleSheet, Dimensions } from "react-native";


const { width, screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: "#EFE8D8",
    // backgroundColor: "#EEE7D7",
  },
  points: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    color: "#333",  
    textAlign: "center"
  },
  sectionSpacing: {
    marginVertical: 5,  
  },
  imageScroll: {
    marginVertical: 20,  
  },
  imageScrollContent: {
    paddingHorizontal: 10, 
  },
  imageWrapper: {
    width: screenWidth,  
    height: 200,         
    justifyContent: "center",  
    alignItems: "center",      
    marginHorizontal: 10,      
  },
  image: {
    width: width * 0.5, 
    height: 200,  
    borderRadius: 10,  
  },
});
