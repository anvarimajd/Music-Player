import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const CategoryCard = ({ item }) => {
  return (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.card}
      imageStyle={styles.cardImage}
    >
      <View style={styles.overlay}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Music Category</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 210,
    marginRight: 16,
    justifyContent: "flex-end",
  },

  cardImage: {
    borderRadius: 22,
  },

  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "rgba(0, 0, 0, 0.22)",
    borderRadius: 22,
  },

  ratingBox: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(15, 15, 19, 0.82)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  ratingText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
  },

  footer: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(15, 15, 19, 0.5)",
    padding: 5,
    borderRadius: 12,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
