import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navButton: {
    padding: 10,
  },
  navText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexWrap: 'wrap',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc', // Grey border
    borderWidth: 1,
    borderRadius: 75, // Consistent circle size
    width: 120, // Consistent width
    height: 120, // Consistent height
    backgroundColor: '#fff', // Plain white background
    marginBottom: 10,
  },
  circleText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#007bff',
    textAlign: 'center',
  },
  updateButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#007bff', // Blue background
    borderColor: '#007bff', // Blue border
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  updateButtonText: {
    color: '#fff', // White text
    fontSize: 16,
  },
  statusSection: {
    padding: 20,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  statusCircleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    marginHorizontal: 10,
  },
  statusCircleCurrent: {
    borderColor: '#ccc', // Grey border
    borderWidth: 1,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Plain white background
  },
  statusCircleNext: {
    borderColor: '#ccc', // Grey border
    borderWidth: 1,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Plain white background
  },
  statusCircleText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  statusHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  nextStatusHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  arrowIcon: {
    marginHorizontal: 10,
  },
  shareButton: {
    backgroundColor: '#007bff', // Blue background
    borderColor: '#007bff', // Blue border
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  shareButtonText: {
    color: '#fff', // White text
    fontSize: 16,
  },
  totalPointsSection: {
    padding: 20,
    alignItems: 'center',
  },
  totalPointsContainer: {
    borderColor: '#ccc', // Grey border
    borderWidth: 1,
    borderRadius: 75,
    padding: 15,
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
    backgroundColor: '#fff', // Plain white background
  },
  totalPointsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  totalPointsText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  cashInButton: {
    backgroundColor: '#007bff', // Blue background
    borderColor: '#007bff', // Blue border
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  cashInButtonText: {
    color: '#fff', // White text
    fontSize: 16,
  },
  cashInButtonSubText: {
    color: '#fff', // White text
    fontSize: 14,
  },
  linksContainer: {
    padding: 20,
  },
  linkButton: {
    backgroundColor: '#007bff', // Blue background
    borderColor: '#007bff', // Blue border
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff', // White text
    fontSize: 16,
  },
});
