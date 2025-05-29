import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./RegenArtciles.style";

const RegenArticles = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display the first image with a smaller height */}
      <Text style={styles.header}>{article.title}</Text>
      {article.images.length > 0 && (
        <Image source={article.images[0]} style={styles.topImage} />
      )}
      {/* Map through the remaining images */}
      {article.images.slice(1).map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}
      <View style={styles.articleContainer}>
      <Text style={styles.subHeader}>Presented by: {article.author}</Text>
      <Text style={styles.date}>By {article.author} {article.date}</Text>
      <Text style={styles.bodyText}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

export default RegenArticles;
