import EmptyRecipes from "@/components/EmptyRecipes";
import RecipeRow from "@/components/RecipeRow";
import { COLORS } from "@/types/Colors";
import { Recipe } from "@/types/Recipe";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/category/CategoryStackParamsList";

type Props = NativeStackScreenProps<CategoryStackParamList, "FilteredRecipes">;

export default function FilteredRecipesScreen({ navigation, route }: Props) {
  const { recipes } = route.params;

  const handleRecipeDetail = (recipe: Recipe) => {
    navigation.navigate("RecipeDetails", { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.recipe_id}
            onPress={() => handleRecipeDetail(item)}
          >
            <RecipeRow {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.recipe_id.toString()}
        ListEmptyComponent={<EmptyRecipes />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "MavenPro_500Medium",
    fontSize: 28,
    paddingVertical: 20,
  },
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
