import { signUpWithEmail } from "@/auth/AuthActions";
import { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    signUpWithEmail({ email, name, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textField}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textField}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textField}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 32,
  },
  button: {
    width: "100%",
    backgroundColor: "#add8e6",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  textField: {
    backgroundColor: "#cee5ed",
    width: "100%",
    height: 36,
    borderRadius: 20,
    padding: 10,
  },
  label: {
    textAlign: "left",
    width: "100%",
    padding: 4,
    fontSize: 18,
  },
});
