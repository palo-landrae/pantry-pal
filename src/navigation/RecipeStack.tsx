import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "./RecipeStackParamsList";
import MainScreen from "@/screens/MainScreen";
import RecipeDetails from "@/screens/RecipeDetails";

const Stack = createNativeStackNavigator<RecipeStackParamList>();

export default function RecipeStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetails"
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
        }}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
}
