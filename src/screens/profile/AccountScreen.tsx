import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "@/types/Colors";
import { supabase } from "@/lib/supabase";
import Password from "@/components/svg/Password";
import { accountValidationSchema } from "src/schema/accountValidationSchema";
import { AuthContext } from "@/auth/AuthContext";
import Settings from "@/components/svg/Settings";

type FormikValues = {
  email: string;
  username: string;
};

export default function AccountScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const changeAccountDetails = async (values: FormikValues) => {
    setIsLoading(true);

    const { error: EmailUpdateError } = await supabase.auth.updateUser({
      email: values.email,
    });

    if (EmailUpdateError) {
      Alert.alert("Error", EmailUpdateError.message);
      setIsLoading(false);
      return;
    }

    const { error: UsernameUpdateError } = await supabase
      .from("users")
      .update({ username: values.username })
      .eq("id", user.id);

    if (UsernameUpdateError) {
      Alert.alert("Error", UsernameUpdateError.message);
      setIsLoading(false);
      return;
    }

    Alert.alert("Success", "You have successfully updated your profile.");
    setIsLoading(false);
    return;
  };

  return (
    <Formik
      initialValues={{
        email: user.email,
        username: user.username,
      }}
      validationSchema={accountValidationSchema}
      onSubmit={(values) => changeAccountDetails(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <ScrollView
          style={{ backgroundColor: "white" }}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Account Settings</Text>
          <Settings width={180} height={180} />
          <View style={styles.inputContainer}>
            <Feather name="mail" color="black" size={16} />
            <TextInput
              style={styles.inputField}
              textContentType="emailAddress"
              value={values.email}
              onChangeText={handleChange("email")}
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
            />
          </View>
          {!!errors.username && (
            <Text style={styles.error}>{errors.username}</Text>
          )}
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.buttonContainer}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>Update Profile</Text>
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
