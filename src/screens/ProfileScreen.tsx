import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { signOut } from "@/auth/AuthActions";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Button onPress={signOut} title={"Logout"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  searchSection: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    maxWidth: "80%",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
