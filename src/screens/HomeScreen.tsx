import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState, useMemo } from "react";
import type { Recipe } from "@/types/Recipe";
import RecipeItem from "src/components/RecipeItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "src/navigation/RecipeStackParamsList";
import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "@/api/fetchRecipes";
import { COLORS } from "@/types/Colors";
import { fetchUserData } from "@/api/fetchUserData";

type Props = NativeStackScreenProps<RecipeStackParamList, "Main">;

export default function HomeScreen({ navigation }: Props) {
  const user = fetchUserData();
  const [searchText, setSearchText] = useState("");

  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery<Recipe[], Error>({
    queryKey: ["recipes"],
    queryFn: fetchAllRecipes,
  });

  const filteredRecipes = useMemo(() => {
    const searchTextLower = searchText.toLowerCase();
    if (searchTextLower.length === 0) return recipes;

    return recipes.filter((item) =>
      item.recipe_name.toString().toLowerCase().includes(searchTextLower),
    );
  }, [searchText, recipes]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "MavenPro_500Medium",
          color: "#a2a2a2",
          textTransform: "capitalize",
        }}
      >
        Hi, {user.username}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "MavenPro_500Medium",
        }}
      >
        What do you want to cook today?
      </Text>
      <View style={styles.inputContainer}>
        <Feather name="search" size={16} color={COLORS.accent} />
        <TextInput
          placeholder="Search for your query"
          placeholderTextColor="grey"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.inputField}
        />
        <Ionicons name="menu" size={16} color={COLORS.primary} />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "MavenPro_500Medium",
        }}
      >
        Most Popular Recipes
      </Text>
      {recipes && (
        <FlatList
          style={styles.flatlist}
          data={filteredRecipes}
          numColumns={2}
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
    padding: 4,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 60,
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 1,
    fontSize: 12,
  },
  input: {
    flex: 1,
    maxWidth: "80%",
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    color: "#949494",
  },
});
