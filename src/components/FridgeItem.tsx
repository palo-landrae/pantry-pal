import { Food } from "@/types/Food";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";

const FridgeItem = (food: Food) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: food.food_image_url }} style={styles.image} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.foodLabel}>{food.food_name}</Text>
        <Feather name="minus-circle" color={COLORS.accent} size={24} />
      </View>
    </View>
  );
};

export default FridgeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 4,
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    alignItems: "center",
  },
  foodLabel: {
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "MavenPro_500Medium",
  },

  image: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
});
