import { Ingredient } from "@/types/Ingredient";
import { StyleSheet, Text, View } from "react-native";

const IngredientItem = (ingredient: Ingredient) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ingredientLabel}>{ingredient.foods.food_name}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.ingredientQuantity}>{ingredient.quantity}</Text>
        <Text style={styles.ingredientQuantity}>
          {ingredient.measurement_unit}
        </Text>
      </View>
    </View>
  );
};

export default IngredientItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 10,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 1,
    borderColor: "#c5c5c5",
  },
  ingredientLabel: {
    textTransform: "capitalize",
    fontSize: 12,
  },
  ingredientQuantity: {
    fontSize: 12,
    color: "grey",
  },
  amountContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
