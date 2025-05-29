import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15, 
    backgroundColor: '#f5f5f5',
  },
  profilePicture: {
    width: 90, 
    height: 90, 
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 15, 
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  email: {
    fontSize: 14, 
    textAlign: 'center',
    color: '#777',
    marginBottom: 15, 
  },
  section: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10, 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  label: {
    fontSize: 12, 
    fontWeight: '600',
    color: '#666',
    marginBottom: 3, 
  },
  info: {
    fontSize: 14, 
    fontWeight: '400',
    color: '#333',
    marginTop: 3, 
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, 
  },
  icon: {
    marginRight: 8, 
    color: '#888',
    fontSize: 14, 
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})