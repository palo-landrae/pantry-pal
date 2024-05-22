import { StyleSheet, Text, View } from "react-native";
import NotFound from "./svg/NotFound";

export default function EmptyRecipes() {
  return (
    <View style={styles.container}>
      <NotFound width={180} height={180} />
      <Text style={{ fontFamily: "MavenPro_500Medium", paddingVertical: 20 }}>
        Unfortunately no recipes found.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 300,
  },
});
