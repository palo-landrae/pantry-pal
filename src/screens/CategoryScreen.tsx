import CategoryCard from "@/components/CategoryCard";
import ViewFridge from "@/components/ViewFridge";
import { COLORS } from "@/types/Colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryStackParamList } from "src/navigation/CategoryStackParamsList";

const categories = [
  {
    category_name: "Fruits",
    category_icon: require("../../assets/images/categories/fruits.jpg"),
  },
  {
    category_name: "Vegetables",
    category_icon: require("../../assets/images/categories/broccoli.jpg"),
  },
  {
    category_name: "Dairy",
    category_icon: require("../../assets/images/categories/dairy.jpg"),
  },
  {
    category_name: "Beef",
    category_icon: require("../../assets/images/categories/beef.jpg"),
  },
  {
    category_name: "Chicken",
    category_icon: require("../../assets/images/categories/chicken.jpg"),
  },
  {
    category_name: "Pork",
    category_icon: require("../../assets/images/categories/pork.jpg"),
  },
  {
    category_name: "Bread",
    category_icon: require("../../assets/images/categories/bread.png"),
  },
];

type Props = NativeStackScreenProps<CategoryStackParamList, "CategoryMain">;

export default function CategoryScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        style={styles.flatlist}
        data={categories}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.category_name}
            onPress={() =>
              navigation.navigate("FoodList", { category: item.category_name })
            }
          >
            <CategoryCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.category_name}
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
    paddingBottom: 70,
    marginVertical: 10,
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
