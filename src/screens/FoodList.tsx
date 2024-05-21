import { fetchFoodsByCategory } from "@/api/fetchFoodsByCategory";
import FoodItem from "@/components/FoodItem";
import ViewFridge from "@/components/ViewFridge";
import { FoodContext } from "@/lib/FoodContext";
import { COLORS } from "@/types/Colors";
import { Food } from "@/types/Food";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/CategoryStackParamsList";

type Props = NativeStackScreenProps<CategoryStackParamList, "FoodList">;

export default function FoodListScreen({ route, navigation }: Props) {
  const { category } = route.params;
  const { foods: fridge, setFoods } = useContext(FoodContext);

  const handleAddFood = (food: Food) => {
    if (fridge.some((e) => e.food_id === food.food_id))
      Alert.alert(`${food.food_name} is already selected.`);
    else setFoods((prevItems) => [...prevItems, food]);
  };

  const { data: foods = [], isLoading } = useQuery<Food[], Error>({
    queryKey: ["foods", category.toLowerCase()],
    queryFn: fetchFoodsByCategory,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {isLoading && <ActivityIndicator />}
      <FlatList
        style={styles.flatlist}
        data={foods}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.food_id}
            onPress={() => handleAddFood(item)}
          >
            <FoodItem {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.food_id.toString()}
      />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <TouchableOpacity onPress={() => navigation.navigate("FridgeList")}>
          <ViewFridge />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: COLORS.accent }]}
        >
          <Text style={styles.buttonText}>Find Recipes</Text>
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
  title: {
    fontFamily: "MavenPro_500Medium",
    fontSize: 28,
    paddingVertical: 20,
  },
  flatlist: {
    flex: 1,
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
