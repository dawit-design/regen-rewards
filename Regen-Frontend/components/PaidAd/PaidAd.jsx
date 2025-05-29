import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./PaidAd.style"; // Ensure your styles are imported correctly

const PaidAd = () => {
  const images = [
    require("../../assets/images/imperative.png"),
    require("../../assets/images/indeginous.png"),
    require("../../assets/images/cyclical.png"),
    require("../../assets/images/nutritious.png"),
    require("../../assets/images/future of agri.png"),
  ];

  return (
    <View style={styles.container}>
      {/* Stylish Header */}
      {/* <Text style={styles.header}>Paid Ad</Text> */}

      {/* New Stacked Images Section */}
      <View style={styles.stackedImagesContainer}>
        {images.map((imageSource, index) => (
          <Image
            key={index}
            source={imageSource}
            style={[
              styles.stackedImage,
              {
                width: `${100 - index * 8}%`, // Decrease width for each image
                marginLeft: index * 4, // Slight margin to create a staggered effect
              },
            ]}
          />
        ))}
      </View>

      {/* Existing Ad Images */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/red quinoa.webp")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/chickpeas.webp")}
          style={styles.image}
        />
        <Image
          source={require("../../assets/images/gigante beans.webp")}
          style={styles.image}
        />
      </View>

      {/* Learn More Button */}
      <View style={styles.headerContainer}>
        <View style={styles.stickyNote}>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => console.log("Learn More Clicked")}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
          <Text style={styles.paidAdText}>Paid Ad</Text>
        </View>
      </View>
    </View>
  );
};

export default PaidAd;
