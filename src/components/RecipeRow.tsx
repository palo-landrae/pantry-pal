import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";
import { Recipe } from "@/types/Recipe";

const RecipeRow = (recipe: Recipe) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image_url }} style={styles.image} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.foodLabel}>{recipe.recipe_name}</Text>
        {recipe.matched_foods_count && (
          <Text
            style={[
              styles.foodLabel,
              { fontSize: 12, textTransform: "lowercase" },
            ]}
          >
            {recipe.matched_foods_count}{" "}
            {recipe.matched_foods_count > 1 ? "ingredients" : "ingredient"}{" "}
            found.
          </Text>
        )}
      </View>
    </View>
  );
};

export default RecipeRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 4,
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    alignItems: "center",
  },
  foodLabel: {
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "MavenPro_500Medium",
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
