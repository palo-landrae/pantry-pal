import RecipeDetails from "@/screens/RecipeDetails";
import { TouchableOpacity } from "react-native";
import { COLORS } from "@/types/Colors";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavouriteStackParamsList } from "./FavouriteStackParamsList";
import FavouriteScreen from "@/screens/FavouriteScreen";

const Stack = createNativeStackNavigator<FavouriteStackParamsList>();

export default function FavouriteStack() {
  return (
    <Stack.Navigator initialRouteName="FavouriteMain">
      <Stack.Screen
        name="FavouriteMain"
        component={FavouriteScreen}
        options={{ headerShown: false }}
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
