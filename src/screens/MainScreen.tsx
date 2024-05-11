import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import type { Recipe } from "@/types/Recipe";
import RecipeItem from "src/components/RecipeItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "src/navigation/RecipeStackParamsList";

type Props = NativeStackScreenProps<RecipeStackParamList, "Main">;

export default function MainScreen({ navigation }: Props) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchText, setSearchText] = useState("");

  const filteredRecipes = useMemo(() => {
    const searchTextLower = searchText.toLowerCase();
    if (searchTextLower.length === 0) return recipes;

    return recipes.filter((item) =>
      item.recipe_name.toString().toLowerCase().includes(searchTextLower),
    );
  }, [searchText, recipes]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const { data } = await supabase.from("recipes").select("*");
    setRecipes(data);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          letterSpacing: 1.4,
          width: "80%",
        }}
      >
        What would you like to cook?
      </Text>
      <View style={styles.searchSection}>
        <Feather
          style={{ padding: 10 }}
          name="search"
          size={20}
          color={"black"}
        />
        <TextInput
          placeholder="Search for your query"
          placeholderTextColor="grey"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.input}
        />
      </View>
      {recipes && (
        <FlatList
          style={styles.flatlist}
          data={filteredRecipes}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecipeDetails", {
                  recipe: item,
                })
              }
            >
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
    backgroundColor: "#fffafa",
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 8,
  },
  searchSection: {
    width: "100%",
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    maxWidth: "80%",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
