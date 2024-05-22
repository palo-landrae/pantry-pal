import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/types/Colors";
import { CategoryStackParamList } from "./CategoryStackParamsList";
import CategoryScreen from "@/screens/CategoryScreen";
import FoodListScreen from "@/screens/FoodList";
import FridgetListScreen from "@/screens/FridgeListScreen";
import FilteredRecipesScreen from "@/screens/FilteredRecipesScreen";
import { TouchableOpacity } from "react-native";
import RecipeDetails from "@/screens/RecipeDetails";
import { Feather } from "@expo/vector-icons";

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
      <Stack.Screen
        name="FridgeList"
        options={() => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
        })}
        component={FridgetListScreen}
      />
      <Stack.Screen
        name="FilteredRecipes"
        options={() => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
        })}
        component={FilteredRecipesScreen}
      />

      <Stack.Screen
        name="RecipeDetails"
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: COLORS.accent,
          headerLeft: (props) => (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 4,
              }}
              {...props}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={16} color={props.tintColor} />
            </TouchableOpacity>
          ),
        })}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
}
