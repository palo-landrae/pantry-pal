import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/types/Colors";
import { CategoryStackParamList } from "./CategoryStackParamsList";
import CategoryScreen from "@/screens/CategoryScreen";
import FoodListScreen from "@/screens/FoodList";

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export default function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName="CategoryMain">
      <Stack.Screen
        name="CategoryMain"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodList"
        options={() => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
        })}
        component={FoodListScreen}
      />
    </Stack.Navigator>
  );
}