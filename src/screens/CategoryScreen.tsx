import CategoryCard from "@/components/CategoryCard";
import FindRecipes from "@/components/FindRecipes";
import ViewFridge from "@/components/ViewFridge";
import { FoodContext } from "@/lib/FoodContext";
import { COLORS } from "@/types/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/category/CategoryStackParamsList";
import { categories } from "./category/categories";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredRecipeByFood } from "@/api/fetchFilteredRecipeByFood";

type Props = NativeStackScreenProps<CategoryStackParamList, "CategoryMain">;

export default function CategoryScreen({ navigation }: Props) {
  const { foods } = useContext(FoodContext);

  const { data: recipes = [] } = useQuery({
    queryKey: ["filteredRecipes", foods.map((food) => food.food_id)],
    queryFn: fetchFilteredRecipeByFood,
    enabled: foods.length > 0,
  });

  const handleFindRecipes = async () => {
    navigation.navigate("FilteredRecipes", { recipes });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={categories}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.category_name}
              onPress={() =>
                navigation.navigate("FoodList", {
                  category: item.category_name,
                })
              }
              style={{ maxWidth: "33%", width: "100%" }}
            >
              <CategoryCard {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.category_name}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 4 }}>
        <TouchableOpacity onPress={() => navigation.navigate("FridgeList")}>
          <ViewFridge />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={foods.length === 0}
          onPress={() => handleFindRecipes()}
        >
          <FindRecipes isDisabled={foods.length === 0} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  flatlistContainer: {
    flex: 3,
    marginHorizontal: "auto",
    width: "100%",
    paddingBottom: 70,
    marginVertical: 10,
    gap: 4,
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
