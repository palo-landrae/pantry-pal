import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "src/navigation/AuthStackParamsList";
import { signInWithEmail } from "@/auth/AuthActions";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    signInWithEmail(email, password);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28 }}>Pantry Pal</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textField}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textField}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
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
