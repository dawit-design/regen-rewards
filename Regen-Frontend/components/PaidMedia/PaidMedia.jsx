import React from "react";
import { View, Image, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./PaidMedia.style";
import { useNavigation } from "@react-navigation/native";

const readingMaterials = [
  {
    id: "1",
    title: "A New Standard in Dairy Farming",
    author: "Alexandre Family Farm",
    date: "09-14-2024",
    images: [
      require("../../assets/images/alexfarmfamily.avif"),
      require("../../assets/images/cowpic.png"),
    ],
    content: `Health has always been our central focus; and it begins with the soil. The foundation of a thriving ecosystem lies beneath our feet, where the richness of the earth nurtures not only plants but also the well-being of communities. Healthy soil is teeming with life, providing essential nutrients that support robust crops and sustainable agriculture. By prioritizing soil health, we are not only investing in the food we eat but also in the environment that sustains us. Practices such as organic farming, crop rotation, and composting not only improve soil quality but also enhance biodiversity, creating a harmonious balance that benefits all living organisms.

As we continue to advocate for healthier soils, we recognize the interconnectedness of our ecosystem. The health of our soil directly influences the quality of the air we breathe, the water we drink, and the food we consume. This holistic approach encourages us to explore innovative farming techniques and sustainable practices that prioritize environmental stewardship. By nurturing our soil, we empower ourselves and future generations to thrive in a world where health is not merely the absence of disease but a dynamic state of well-being. Together, we can cultivate a healthier planet, one rich in resources and possibilities for all.
    `,
  },
];

const PaidMedia = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("RegenArticles", { article: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={readingMaterials}
        renderItem={({ item }) => (
          <TouchableOpacity
          style={styles.articleContainer}
          onPress={() => handlePress(item)}
          >
          {/* <Text style={styles.header}>Paid Media Featured Stories</Text> */}
            <View style={styles.dottedLine} />
            <Image
              source={item.images[0]}
              style={styles.topImage}
              resizeMode="contain"
            />
            <View style={styles.dottedLine} />
            {item.images.slice(1).map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.subHeader}>Presented by: {item.author}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PaidMedia;
