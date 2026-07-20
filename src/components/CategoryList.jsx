import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { musicCategories } from "../data/categories";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.action}>See all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {musicCategories.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },

  action: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "600",
  },

  listContent: {
    paddingRight: 4,
  },
});
