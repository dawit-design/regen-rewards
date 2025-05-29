import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Padding to prevent content from touching screen edges
  },
  logoContainer: {
    width: width,              
    height: height * 0.4,      
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
  },
  logo: {
    width: '100%',             
    height: '100%',            
    resizeMode: 'cover',     
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '90%',              // Button width at 90% to avoid touching edges
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#000',
    fontSize: 16,
    marginVertical: 10,
  },
});
