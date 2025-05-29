import { StyleSheet , Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFE8D8',
  },
  profileContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  scanProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexWrap: 'wrap',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 75,
    width: 120,
    height: 120,
    backgroundColor: '#fff',
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
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  updateButtonText: {
    color: '#fff',
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  statusCircleNext: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  statusCircleText: {
    color: '#007bff',
    fontSize: 12,
    textAlign: 'center',
  },
  arrowIcon: {
    marginHorizontal: 10,
  },
  shareButton: {
    backgroundColor: '#007bff',
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  totalPointsSection: {
    padding: 20,
  },
  totalPointsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalPointsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalPointsText: {
    fontSize: 16,
    color: '#28a745',
    textAlign: 'center',
  },
  cashInButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cashInButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cashInButtonSubText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  linksContainer: {
    padding: 20,
  },
  linkButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  // Modal Styles
 // Cash In Modal
 modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
  width: width * 0.8,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
modalInput: {
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  marginBottom: 20,
  fontSize: 16,
  padding: 10,
},
modalButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},
modalButton: {
  flex: 1,
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 5,
},
modalButtonConfirm: {
  backgroundColor: '#28A745',
},
modalButtonCancel: {
  backgroundColor: '#dc3545',
},
modalButtonText: {
  color: 'white',
  fontWeight: 'bold',
},

// Share Modal
shareModalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
shareModalContent: {
  width: width * 0.8,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
},
shareModalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 15,
},
shareOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
  width: '100%',
  paddingHorizontal: 10,
},
shareOptionText: {
  fontSize: 16,
  marginLeft: 10,
},
shareModalButtonClose: {
  marginTop: 20,
  backgroundColor: '#007bff',
  padding: 10,
  borderRadius: 5,
  width: '100%',
  alignItems: 'center',
},
shareModalButtonCloseText: {
  color: 'white',
  fontWeight: 'bold',
},
profileImage: {
  width: 120,
  height: 120,
  borderRadius: 60,
  borderWidth: 2,
  borderColor: '#ccc',
  alignSelf: 'center',
  marginBottom: 10,
},
editProfilePicButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#007bff',
  padding: 10,
  borderRadius: 5,
},
editProfilePicText: {
  color: '#fff',
  marginLeft: 5,
},
initialsCircle: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: '#28a745', 
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#ccc',
},
initialsText: {
  color: '#fff',
  fontSize: 36, 
  fontWeight: 'bold',
  textAlign: 'center',
},
});
