import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "src/navigation/AuthStackParamsList";
import { signInWithUsernameAndPassword } from "@/auth/AuthActions";
import { Formik } from "formik";
import { loginUpValidationSchema } from "src/schema/loginValidationSchema";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

type FormikValues = {
  username: string;
  password: string;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values: FormikValues) =>
        signInWithUsernameAndPassword(values.username, values.password)
      }
      validationSchema={loginUpValidationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Image
            source={require("../../../assets/images/undraw/undraw_Cooking.png")}
            style={{
              resizeMode: "cover",
              width: 180,
              height: 180,
              alignSelf: "center",
            }}
          />
          <Text style={styles.title}>Pantry Pal</Text>
          <Text style={styles.subtitle}>Delicious food for you!</Text>
          {/* Email */}
          <View style={styles.inputContainer}>
            <Feather name="user" color="black" size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="username"
              value={values.username}
              onChangeText={handleChange("username")}
              placeholder="Username"
            />
          </View>
          {!!errors.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}

          {/* Password */}
          <View style={styles.inputContainer}>
            <Feather name="lock" color={"black"} size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="password"
              value={values.password}
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              placeholder="Password"
            />
          </View>
          {!!errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.subtitle}>Don't have an account?</Text>
            <Text style={[styles.subtitle, { color: COLORS.accent }]}>
              {" "}
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 1,
    fontSize: 12,
  },
  error: {
    fontSize: 10,
    color: COLORS.ghost,
  },
  title: {
    fontSize: 20,
    fontFamily: "MavenPro_500Medium",
  },
  subtitle: {
    fontSize: 12,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontFamily: "MavenPro_500Medium",
  },
});
