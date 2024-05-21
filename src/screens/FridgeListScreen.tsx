import FindRecipes from "@/components/FindRecipes";
import FridgeItem from "@/components/FridgeItem";
import { FoodContext } from "@/lib/FoodContext";
import { COLORS } from "@/types/Colors";
import { Food } from "@/types/Food";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/CategoryStackParamsList";

type Props = NativeStackScreenProps<CategoryStackParamList, "FridgeList">;

export default function FridgetListScreen({ navigation }: Props) {
  const { foods, setFoods } = useContext(FoodContext);

  const handleRemove = (food: Food) => {
    setFoods(foods.filter((e) => e.food_id !== food.food_id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fridge</Text>
      <FlatList
        style={styles.flatlist}
        data={foods}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.food_id}
            onPress={() => handleRemove(item)}
          >
            <FridgeItem {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.food_id.toString()}
      />
      <FindRecipes />
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
