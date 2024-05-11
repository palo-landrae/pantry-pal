import { supabase } from "@/lib/supabase";
import { Instruction } from "@/types/Instruction";
import { Ingredient } from "@/types/Ingredient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RecipeStackParamList } from "src/navigation/RecipeStackParamsList";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "@/auth/AuthContext";

type Props = NativeStackScreenProps<RecipeStackParamList, "RecipeDetails">;

export default function RecipeDetails({ route, navigation }: Props) {
  const { recipe } = route.params;
  const { user } = useContext(AuthContext);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  const fetchRecipeDetails = async () => {
    const { data } = await supabase
      .from("favourites")
      .select("*")
      .eq("recipe_id", recipe.recipe_id)
      .eq("user_id", user.id);

    setIsFavourite(data.length >= 1);

    const { data: ingredientData } = await supabase
      .from("ingredients")
      .select("*")
      .eq("recipe_id", recipe.recipe_id);
    setIngredients(ingredientData);

    const { data: instructionData } = await supabase
      .from("instructions")
      .select("*")
      .eq("recipe_id", recipe.recipe_id);
    setInstructions(instructionData);
  };

  const handleFavourite = async () => {
    const newIsFavourite = !isFavourite;
    setIsFavourite(newIsFavourite);

    if (!newIsFavourite) {
      const { error } = await supabase
        .from("favourites")
        .delete()
        .eq("recipe_id", recipe.recipe_id)
        .eq("user_id", user.id);
      if (error) {
        Alert.alert(error.message);
        setIsFavourite(!newIsFavourite);
      }
    } else {
      const { error } = await supabase
        .from("favourites")
        .insert({ recipe_id: recipe.recipe_id, user_id: user.id });

      if (error) {
        Alert.alert(error.message);
        setIsFavourite(!newIsFavourite);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: recipe.image_url,
        }}
      />
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
          <TouchableOpacity onPress={handleFavourite}>
            <AntDesign
              name={isFavourite ? "heart" : "hearto"}
              size={20}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
        <Text>{recipe.description}</Text>
        <Text style={styles.subtitle}>Ingredients</Text>
        {ingredients &&
          ingredients.map((item) => (
            <TouchableOpacity onPress={() => console.log(item.ingredient_name)}>
              <Text key={item.ingredient_id}>
                {item.quantity} {item.measurement_unit} - {item.ingredient_name}
              </Text>
            </TouchableOpacity>
          ))}
        <Text style={styles.subtitle}>Instructions</Text>
        {instructions &&
          instructions.map((item) => (
            <Text key={item.instruction_id}>
              {item.step} - {item.content}
            </Text>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 2,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 40,
    resizeMode: "cover",
  },
});
