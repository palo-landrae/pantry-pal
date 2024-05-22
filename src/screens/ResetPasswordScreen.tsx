import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import { resetPasswordValidationSchema } from "src/schema/resetPasswordValidationSchema";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";
import { supabase } from "@/lib/supabase";
import Password from "@/components/svg/Password";

type FormikValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ResetPasswordScreen() {
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeUserPassword = async (values: FormikValues) => {
    setIsLoading(true);
    const { data: VerificationResult, error: VerificationError } =
      await supabase.rpc("verify_user_password", {
        password: values.currentPassword,
      });

    if (!!!VerificationResult) {
      setIsLoading(false);
      return Alert.alert("Error", "Password is incorrect.");
    }

    if (VerificationError) {
      Alert.alert("Error", VerificationError.message);
      setIsLoading(false);
      return;
    }

    const { error: UpdateError } = await supabase.auth.updateUser({
      password: values.newPassword,
    });

    if (UpdateError) {
      Alert.alert("Error", UpdateError.message);
      setIsLoading(false);
      return;
    }
    Alert.alert("Success", "Your new password was successfully set.");
    setIsLoading(false);
    return;
  };

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={resetPasswordValidationSchema}
      onSubmit={(values) => changeUserPassword(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <ScrollView
          style={{ backgroundColor: "white" }}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Reset Password</Text>
          <Password width={180} height={180} />
          {/* Current Password */}
          <View style={styles.inputContainer}>
            <Feather name="unlock" color={"black"} size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="password"
              value={values.currentPassword}
              secureTextEntry={!visible}
              onChangeText={handleChange("currentPassword")}
              placeholder="Enter your current password"
            />
            <TouchableOpacity
              onPress={() => setVisible((prevState) => !prevState)}
            >
              <Feather name={visible ? "eye" : "eye-off"} size={14} />
            </TouchableOpacity>
          </View>
          {!!errors.currentPassword && (
            <Text style={styles.error}>{errors.currentPassword}</Text>
          )}

          {/* New Password */}
          <View style={styles.inputContainer}>
            <Feather name="lock" color={"black"} size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="newPassword"
              value={values.newPassword}
              secureTextEntry={!visible}
              onChangeText={handleChange("newPassword")}
              placeholder="Enter your new password"
            />
            <TouchableOpacity
              onPress={() => setVisible((prevState) => !prevState)}
            >
              <Feather name={visible ? "eye" : "eye-off"} size={14} />
            </TouchableOpacity>
          </View>
          {!!errors.newPassword && (
            <Text style={styles.error}>{errors.newPassword}</Text>
          )}

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Feather name="lock" color={"black"} size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="newPassword"
              value={values.confirmPassword}
              secureTextEntry={!visible}
              onChangeText={handleChange("confirmPassword")}
              placeholder="Re-type your new password"
            />
            <TouchableOpacity
              onPress={() => setVisible((prevState) => !prevState)}
            >
              <Feather name={visible ? "eye" : "eye-off"} size={14} />
            </TouchableOpacity>
          </View>
          {!!errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.buttonContainer}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 8,
    backgroundColor: "white",
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
    fontFamily: "MavenPro_500Medium",
    fontSize: 28,
    paddingVertical: 20,
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
