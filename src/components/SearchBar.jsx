import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../constants/colors";

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search music, artist, album...",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <View style={styles.iconCircle} />
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  iconWrapper: {
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    borderRadius: 7,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
  },
});
