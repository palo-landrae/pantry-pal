import { COLORS } from "@/types/Colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  value: string;
}

const NutrientItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

export default NutrientItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: "#f3f3f3",
  },
  title: {
    fontSize: 10,
    textAlign: "center",
  },
  value: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "MavenPro_500Medium",
  },
});
