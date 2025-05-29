import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    backgroundColor: "#EFE8D8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  footerItem: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  footerText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333", // Set text color for visibility
    textAlign: "center",
    zIndex: 1,
    marginVertical: 2, // Space between text lines
  },
  mainFooterWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scanButtonWrapper: {
    alignItems: "center",
  },
  mainFooterItem: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ccc",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  icon: {
    marginBottom: 0,
  },
  scanText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  lineLeft: {
    height: 1,
    backgroundColor: "#ccc",
    width: 40,
    marginRight: 5,
  },
  lineRight: {
    height: 1,
    backgroundColor: "#ccc",
    width: 40,
    marginLeft: 5,
  },
  iconsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  watermarkIcon: {
    opacity: 0.9,
  },
});
