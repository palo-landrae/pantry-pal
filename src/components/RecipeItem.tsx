import { Recipe } from "@/types/Recipe";
import { StyleSheet, Text, View, Image, TextBase } from "react-native";

const RecipeItem = (recipe: Recipe) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: recipe.image_url,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.cardTitle}>{recipe.recipe_name}</Text>
        <Text style={styles.cardDescription} numberOfLines={1}>
          {recipe.description}
        </Text>
      </View>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    gap: 4,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardDescription: {
    fontSize: 10,
    width: "80%",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 12,
  },
});
