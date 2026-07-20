import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const TopSongCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Image
          source={{ uri: item.cover }}
          style={styles.cover}
          resizeMode="cover"
        />

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.artist} numberOfLines={1}>
            {item.artist}
          </Text>

          <Text style={styles.album} numberOfLines={1}>
            {item.album} • {item.year}
          </Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    </View>
  );
};

export default TopSongCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  cover: {
    width: 56,
    height: 56,
    borderRadius: 14,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: 12,
    marginBottom: 2,
  },
  album: {
    color: colors.placeholder,
    fontSize: 11,
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rating: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  duration: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
