import { StyleSheet, Text, View } from "react-native";
import EmptyCart from "./svg/EmptyCart";

export default function EmptyFridge() {
  return (
    <View style={styles.container}>
      <EmptyCart width={180} height={180} />
      <Text style={{ fontFamily: "MavenPro_500Medium", paddingVertical: 20 }}>
        Select an ingredient to continue.
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
