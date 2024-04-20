import { signOut } from "@/auth/AuthActions";
import { Button, StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Pantry Pal</Text>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
