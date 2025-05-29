const sendReceiptForClaim = async (photo) => {
    try {
      const formData = new FormData();
      formData.append('receipt', {
        uri: photo.uri,
        type: 'image/jpeg', // or the appropriate type
        name: 'receipt.jpg',
      });
  
      // Replace with your actual endpoint
      const response = await fetch('http://localhost:9000/api/claims', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert("Receipt Submitted", data.message || "Your receipt has been processed successfully.");
        // Optionally, you can navigate to another screen or update local state here
      } else {
        Alert.alert("Submission Failed", data.message || "There was an error processing your receipt.");
      }
    } catch (error) {
      console.error("Error sending receipt for claim:", error);
      Alert.alert("Error", "An error occurred while submitting your receipt.");
    }
  };
  