import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RecipeStackParamList } from "./RecipeStackParamsList";
import HomeScreen from "@/screens/HomeScreen";
import RecipeDetails from "@/screens/RecipeDetails";
import { TouchableOpacity } from "react-native";
import { COLORS } from "@/types/Colors";
import { Feather } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RecipeStackParamList>();
type RecipeDetailsProp = NativeStackScreenProps<
  RecipeStackParamList,
  "RecipeDetails"
>;

export default function RecipeStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetails"
        options={({ navigation }: RecipeDetailsProp) => ({
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
              onPress={() =>
                navigation.reset({ index: 0, routes: [{ name: "Main" }] })
              }
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