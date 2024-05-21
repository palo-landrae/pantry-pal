import { FoodContext } from "@/lib/FoodContext";
import { COLORS } from "@/types/Colors";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ViewFridge() {
  const { foods } = useContext(FoodContext);
  return (
    <View style={[styles.buttonContainer, { backgroundColor: COLORS.primary }]}>
      <Text style={styles.buttonText}>View Fridge</Text>
      <Text style={styles.buttonText}>| {foods.length} items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 12,
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
