import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamsList } from "./ProfileStackParamsList";
import ProfileScreen from "@/screens/ProfileScreen";
import ResetPasswordScreen from "@/screens/ResetPasswordScreen";
import { COLORS } from "@/types/Colors";
import AccountScreen from "@/screens/profile/AccountScreen";

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
        }}
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="Account"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
        }}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
}
