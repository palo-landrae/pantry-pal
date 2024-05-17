import CategoryCard from "@/components/CategoryCard";
import { FlatList, StyleSheet, Text, View } from "react-native";

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

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        style={styles.flatlist}
        data={categories}
        numColumns={2}
        renderItem={({ item }) => <CategoryCard {...item} />}
        keyExtractor={(item) => item.category_name}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
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
});
