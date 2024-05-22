import { StyleSheet, Text, View } from "react-native";
import Like from "./svg/Like";

export default function EmptyFavourites() {
  return (
    <View style={styles.container}>
      <Like width={180} height={180} />
      <Text style={{ fontFamily: "MavenPro_500Medium", padding: 20 }}>
        You have no favourites yet.
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
