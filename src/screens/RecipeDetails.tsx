import { Instruction } from "@/types/Instruction";
import { Ingredient } from "@/types/Ingredient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RecipeStackParamList } from "src/navigation/recipe/RecipeStackParamsList";
import { AuthContext } from "@/auth/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { fetchIngredients } from "@/api/fetchIngredients";
import { fetchInstructions } from "@/api/fetchInstructions";
import { fetchNutritionalInfos } from "@/api/fetchNutritionalInfos";
import IngredientItem from "@/components/IngredientItem";
import FavouriteToggle from "@/components/FavouriteToggle";
import InstructionItem from "@/components/InstructionItem";
import { NutritionalInfo } from "@/types/NutritionalInfo";
import NutrientItem from "@/components/NutrientItem";

type Props = NativeStackScreenProps<RecipeStackParamList, "RecipeDetails">;

export default function RecipeDetails({ route }: Props) {
  const { recipe } = route.params;
  const { user } = useContext(AuthContext);

  const { data: ingredients = [] } = useQuery<Ingredient[]>({
    queryKey: ["ingredients", recipe.recipe_id],
    queryFn: fetchIngredients,
  });

  const { data: instructions = [] } = useQuery<Instruction[]>({
    queryKey: ["instructions", recipe.recipe_id],
    queryFn: fetchInstructions,
  });

  const { data: nutrients } = useQuery<NutritionalInfo>({
    queryKey: ["nutrients", recipe.recipe_id],
    queryFn: fetchNutritionalInfos,
  });

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{
            uri: recipe.image_url,
          }}
        />
        <View
          style={{
            height: 24,
            backgroundColor: "white",
            zIndex: 1,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            marginTop: -40,
          }}
        />
      </View>
      <View style={styles.innerContainer}>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>{recipe.recipe_name}</Text>
          <FavouriteToggle recipe_id={recipe.recipe_id} user_id={user.id} />
        </View>
        <Text style={styles.description}>{recipe.description}</Text>
        {nutrients && (
          <View style={styles.nutrientsContainer}>
            <NutrientItem title="Calories" value={nutrients.calories} />
            <NutrientItem title="Carbs" value={nutrients.carbs} />
            <NutrientItem title="Fats" value={nutrients.fat} />
            <NutrientItem title="Protein" value={nutrients.protein} />
          </View>
        )}
        <Text style={styles.subtitle}>Ingredients</Text>
        {ingredients &&
          ingredients.map((item) => (
            <IngredientItem key={item.ingredient_id} {...item} />
          ))}
        <Text style={styles.subtitle}>Instructions</Text>
        <View style={{ paddingHorizontal: 4, flex: 1 }}>
          {instructions &&
            instructions.map((item) => (
              <InstructionItem key={item.instruction_id} {...item} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "red" },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "MavenPro_500Medium",
  },
  description: {
    fontSize: 14,
    color: "#a2a2a2",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: "MavenPro_500Medium",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  nutrientsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    marginTop: 20,
  },
});
