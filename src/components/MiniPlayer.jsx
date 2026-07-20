import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={{
            uri: "https://i1.sndcdn.com/artworks-zW2cZ95Z0enmhZ66-7yNTrA-t500x500.jpg",
          }}
          style={styles.cover}
        />

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            Stick Season
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            Noah Kahan
          </Text>
        </View>

        <Text style={styles.duration}>3:02</Text>
      </View>

      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>

      <View style={styles.controls}>
        <Pressable style={styles.sideButton}>
          <Text style={styles.sideButtonText}>-10</Text>
        </Pressable>

        <Pressable style={styles.playButton} onPress={handleTogglePlay}>
          <Text style={styles.playButtonText}>
            {isPlaying ? "Pause" : "Play"}
          </Text>
        </Pressable>

        <Pressable style={styles.sideButton}>
          <Text style={styles.sideButtonText}>+10</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cover: {
    width: 42,
    height: 42,
    borderRadius: 12,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: 11,
  },
  duration: {
    color: colors.textSecondary,
    fontSize: 11,
    marginLeft: 8,
  },
  progressTrack: {
    height: 4,
    backgroundColor: "#2A2A2A",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 12,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    backgroundColor: colors.accent,
    borderRadius: 999,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
  },
  sideButton: {
    flex: 1,
    height: 36,
    backgroundColor: colors.background,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  sideButtonText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "600",
  },
  playButton: {
    width: 82,
    height: 40,
    backgroundColor: colors.accent,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  playButtonText: {
    color: "#111",
    fontSize: 13,
    fontWeight: "700",
  },
});
