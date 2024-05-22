import { COLORS } from "@/types/Colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  isDisabled: boolean;
}

export default function FindRecipes({ isDisabled }: Props) {
  return (
    <View
      style={[
        styles.buttonContainer,
        isDisabled && { backgroundColor: "grey" },
      ]}
    >
      <Text style={styles.buttonText}>Find Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: COLORS.accent,
    padding: 10,
    borderRadius: 12,
    width: "100%",
    maxHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontFamily: "MavenPro_500Medium",
  },
});
