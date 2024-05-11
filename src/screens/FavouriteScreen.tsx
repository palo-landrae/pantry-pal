import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/Recipe";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FlatList, View } from "react-native";
import RecipeItem from "src/components/RecipeItem";

export default function FavouriteScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = fetchRecipes();

      return () => unsubscribe;
    }, []),
  );

  const fetchRecipes = async () => {
    const { data } = await supabase.from("favourites").select(`*, recipes (*)`);
    setRecipes(data.map((item) => item.recipes));
  };

  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
      {recipes && (
        <FlatList
          data={recipes}
          style={styles.flatlist}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <RecipeItem {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.recipe_id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 8,
  },
});
