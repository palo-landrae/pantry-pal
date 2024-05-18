import { fetchFoodsByCategory } from "@/api/fetchFoodsByCategory";
import FoodItem from "@/components/FoodItem";
import { COLORS } from "@/types/Colors";
import { Food } from "@/types/Food";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/CategoryStackParamsList";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<CategoryStackParamList, "FoodList">;

export default function FoodListScreen({ route }: Props) {
  const { category } = route.params;

  const {
    data: foods = [],
    isLoading,
    error,
  } = useQuery<Food[], Error>({
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
            onPress={() => console.log(item.food_name)}
          >
            <FoodItem {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.food_id.toString()}
      />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: COLORS.primary }]}
        >
          <Text style={styles.buttonText}>View Fridge</Text>
          <Text style={styles.buttonText}>| 3 items</Text>
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
