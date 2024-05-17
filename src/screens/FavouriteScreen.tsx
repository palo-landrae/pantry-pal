import { fetchFavouriteRecipes } from "@/api/fetchFavouriteRecipes";
import { fetchUserData } from "@/api/fetchUserData";
import { Recipe } from "@/types/Recipe";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList, View } from "react-native";
import RecipeItem from "src/components/RecipeItem";

export default function FavouriteScreen() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      {favourites.length !== 0 ? (
        <FlatList
          style={styles.flatlist}
          data={favourites}
          numColumns={2}
          renderItem={({ item }) => <RecipeItem {...item} />}
          keyExtractor={(item) => item.recipe_id.toString()}
        />
      ) : (
        <Text>No recipe has been selected yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontFamily: "MavenPro_500Medium",
    fontSize: 28,
    paddingVertical: 20,
  },
  flatlist: {
    flex: 1,
    paddingBottom: 70,
    marginVertical: 10,
    alignSelf: "baseline",
    paddingHorizontal: 40,
  },
});
