import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { topSongs } from "../data/topSongs";
import TopSongCard from "./TopSongCard";

const TopSongList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Songs</Text>
        <Text style={styles.action}>See all</Text>
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={topSongs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TopSongCard item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

export default TopSongList;

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

  listWrapper: {
    height: 360,
  },

  listContent: {
    paddingBottom: 12,
  },
});
