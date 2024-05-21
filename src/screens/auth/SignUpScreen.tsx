import { signUpWithEmail } from "@/auth/AuthActions";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { signUpValidationSchema } from "src/schema/signUpValidationSchema";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";

type FormikValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpScreen() {
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values: FormikValues) =>
        signUpWithEmail({
          email: values.email,
          username: values.username,
          password: values.password,
        })
      }
      validationSchema={signUpValidationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <ScrollView
          style={{ backgroundColor: "white" }}
          contentContainerStyle={styles.container}
        >
          <Image
            source={require("../../../assets/images/undraw/undraw_Chef.png")}
            style={{
              resizeMode: "cover",
              width: 180,
              height: 180,
              alignSelf: "center",
            }}
          />
          <Text style={styles.title}>Getting Started</Text>
          <Text style={styles.subtitle}>Unleash the chef inside you!</Text>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Feather name="mail" color="black" size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="emailAddress"
              value={values.email}
              onChangeText={handleChange("email")}
              placeholder="Email"
            />
          </View>
          {!!errors.email && <Text style={styles.error}>{errors.email}</Text>}

          {/* Username */}
          <View style={styles.inputContainer}>
            <Feather name="user" color={"black"} size={16} />
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

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Feather name="lock" color={"black"} size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="password"
              value={values.confirmPassword}
              secureTextEntry={true}
              placeholder="Re-type password"
              onChangeText={handleChange("confirmPassword")}
            />
          </View>
          {!!errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={[styles.subtitle, { textAlign: "center" }]}>
            By creating an account you agree to our{" "}
            <Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.accent,
                  fontWeight: "600",
                }}
              >
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.accent,
                  fontWeight: "600",
                }}
              >
                Privacy Policy.
              </Text>
            </Text>
          </Text>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
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
  error: {
    fontSize: 10,
    color: COLORS.ghost,
  },
});
