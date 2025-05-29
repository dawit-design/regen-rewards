import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFE8D8',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    zIndex: 1000,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#333',
  },
  hamburgerButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1000,
  },
  menuContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%', 
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    zIndex: 1000,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
  hamburgerText: {
    fontSize: 24,
    color: '#007BFF',
  },
  logoutContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',  // Center items vertically
    padding: 15,
  },
  logoutText: {
    marginRight: 5, // Space between text and icon
  },
  logoutIcon: {
    // This can be styled further if needed
  },
});
