import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center the content vertically
  },
  scrollContainer: {
    flexGrow: 1, // Allow scroll view to grow
    justifyContent: 'center', // Center content in scroll view
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30, // Increased margin to add more space below the header
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Increased space between each service
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15, // Increased padding at the bottom for more space
  },
  icon: {
    marginRight: 20, // Increased space between the icon and text
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Increased space below the title
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5, // Added some space below the description to improve readability
  },
});
