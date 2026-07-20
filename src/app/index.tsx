import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";

import CategoryList from "../components/CategoryList";
import MiniPlayer from "../components/MiniPlayer";
import SearchBar from "../components/SearchBar";
import TopSongList from "../components/TopSongList";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />

      <CategoryList />
      <TopSongList />

      <View style={styles.playerWrapper}>
        <MiniPlayer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },

  header: {
    marginBottom: 20,
  },

  overline: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 6,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: "700",
  },
  playerWrapper: {
    marginTop: 16,
    marginBottom: 10,
  },
});
