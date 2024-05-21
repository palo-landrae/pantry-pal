import { COLORS } from "@/types/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function FindRecipes() {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: COLORS.primary }]}>
      <Text style={styles.buttonText}>Find Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.accent,
    padding: 10,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontFamily: "MavenPro_500Medium",
  },
});
