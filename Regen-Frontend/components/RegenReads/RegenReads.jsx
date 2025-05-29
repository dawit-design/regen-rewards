import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./RegenReads.style";

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
  {
    id: "2",
    title: "Meet Our Regenerative Coconut Farmers",
    author: "Harmless Harvest",
    date: "09-02-2024",
    images: [
      require("../../assets/images/harmless.png"),
      require("../../assets/images/Thailand.png"),
    ],
    content: `In Thailand, regenerative agriculture is transforming farming practices and reshaping the agricultural landscape. This innovative approach emphasizes working in harmony with nature rather than relying solely on chemical inputs and monoculture systems. By focusing on soil health, biodiversity, and ecosystem restoration, Thai farmers are adopting techniques that enhance the resilience of their crops while improving yields. Practices such as cover cropping, agroforestry, and crop diversification are becoming increasingly popular, enabling farmers to build a sustainable farming system that supports both their livelihoods and the environment.

The impact of regenerative agriculture in Thailand extends beyond the fields, influencing local communities and economies. Farmers are witnessing improved soil fertility, leading to reduced reliance on synthetic fertilizers and pesticides, which ultimately lowers production costs and enhances the quality of their produce. Additionally, regenerative practices help mitigate climate change by sequestering carbon in the soil and promoting healthier ecosystems. As farmers share their success stories, more individuals and communities are inspired to embrace regenerative methods, fostering a movement that not only revitalizes the agricultural sector but also contributes to food security and environmental sustainability for future generations.
    `,
  },
  // Add more articles as needed
];

const RegenReads = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("RegenArticles", { article: item });
  };

  const renderArticle = ({ item }) => (
    <TouchableOpacity
      style={styles.articleContainer}
      onPress={() => handlePress(item)}
    >
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
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.subHeader}>Presented by: {item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={readingMaterials}
      renderItem={renderArticle}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <View style={styles.articleContainer}>
          <Text style={styles.welcome}>Welcome to Regen Reads!</Text>
          <Text style={styles.featuredStories}>
            Take a look at our featured stories, and upgrade to Regen Rewards
            Plus to view all past ones.
          </Text>
        </View>
      )}
    />
  );
};

export default RegenReads;
