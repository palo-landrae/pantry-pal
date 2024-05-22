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
      <View
        style={{
          flex: 1,
          padding: 4,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "MavenPro_500Medium",
            textAlign: "center",
          }}
        >
          {recipe.recipe_name}
        </Text>
      </View>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "98%",
    height: 150,
    alignItems: "center",
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    margin: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
