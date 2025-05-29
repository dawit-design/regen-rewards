import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const PhotoPreviewSection = ({ photo, handleRetakePhoto, handleReceiptUpload, handleBackToScan }) => {
    const navigation = useNavigation();

    const handleUploadNavigate = async () => {
        console.log("Handling receipt upload...");
        const uploadSuccess = await handleReceiptUpload(); // Wait for upload to complete
        if (uploadSuccess) { // Check if upload was successful
          navigation.navigate("PastReceipts"); // Navigate only after upload
        }
      };
      

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                {photo && photo.base64 ? (
                    <Image
                        style={styles.previewContainer}
                        source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
                    />
                ) : (
                    <Text style={{ color: 'white' }}>No photo available</Text>
                )}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
                    <Fontisto name='trash' size={36} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleUploadNavigate}>
                    <Text style={styles.confirmText}>Use Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleBackToScan}>
                    <Text style={styles.confirmText}>Back to Scan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        borderRadius: 15,
        padding: 1,
        width: '95%',
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: "center",
    },
    previewContainer: {
        width: '95%',
        height: '85%',
        borderRadius: 15,
    },
    buttonContainer: {
        marginTop: '4%',
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%',
    },
    button: {
        backgroundColor: 'gray',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    confirmText: {
        fontSize: 16,
        color: 'white',
    },
});

export default PhotoPreviewSection;
