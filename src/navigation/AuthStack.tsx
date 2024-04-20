import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignUpScreen";
import { AuthStackParamList } from "./AuthStackParamsList";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="SignUp"
        options={{
          headerTitle: "Create Account",
        }}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
