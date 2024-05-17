import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignUpScreen";
import { AuthStackParamList } from "./AuthStackParamsList";
import { COLORS } from "@/types/Colors";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
