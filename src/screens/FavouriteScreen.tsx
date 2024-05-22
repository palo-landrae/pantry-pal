import { fetchFavouriteRecipes } from "@/api/fetchFavouriteRecipes";
import { fetchUserData } from "@/api/fetchUserData";
import EmptyFavourites from "@/components/EmptyFavourites";
import RecipeRow from "@/components/RecipeRow";
import { Recipe } from "@/types/Recipe";
import { useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList, View } from "react-native";
import { FavouriteStackParamsList } from "src/navigation/favourites/FavouriteStackParamsList";

type Props = NativeStackScreenProps<FavouriteStackParamsList, "FavouriteMain">;

export default function FavouriteScreen({ navigation }: Props) {
  const isFocused = useIsFocused();
  const user = fetchUserData();
  const {
    data: favourites = [],
    isLoading,
    error,
  } = useQuery<Recipe[], Error>({
    queryKey: ["favourites", user.id],
    queryFn: fetchFavouriteRecipes,
    enabled: isFocused,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const handleRecipeDetail = (recipe: Recipe) => {
    navigation.navigate("RecipeDetails", { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.recipe_id}
            onPress={() => handleRecipeDetail(item)}
          >
            <RecipeRow {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.recipe_id.toString()}
        ListEmptyComponent={<EmptyFavourites />}
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
});
