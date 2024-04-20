import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const signIn = async () => {
    console.log("LOGIN");
  };
  return (
    <View style={styles.container}>
      <Button onPress={signIn} title="Login" />
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
