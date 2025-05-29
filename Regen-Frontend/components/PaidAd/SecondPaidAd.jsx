import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./secondPaidAd.style"; // Import the new style file

const SecondPaidAd = () => {
  const secondAdImages = [
    require("../../assets/images/jasmine.png"),
    require("../../assets/images/sea salt.png"),
    require("../../assets/images/Rice Cake.png"),
    require("../../assets/images/rice plant.png"),
  ];

  return (
    <View style={styles.container}>
      {/* Stylish Header for the Second Ad */}
      {/* <Text style={styles.header}>Paid Ad</Text> */}

      {/* Stacked Images Section */}
      <View style={styles.imagesContainer}>
        {/* First Three Images in Row */}
        <View style={styles.rowContainer}>
          {secondAdImages.slice(0, 3).map((imageSource, index) => (
            <Image
              key={index}
              source={imageSource}
              style={styles.rowImage}
            />
          ))}
        </View>

        {/* Last Image Taking Full Width */}
        <Image
          source={secondAdImages[3]}
          style={styles.fullWidthImage}
        />
      </View>
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

export default SecondPaidAd;
