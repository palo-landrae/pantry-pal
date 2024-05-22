import { BottomTabParamsList } from "./BottomTabParamsList";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { COLORS } from "@/types/Colors";
import { Feather } from "@expo/vector-icons";
import RecipeStack from "../recipe/RecipeStack";
import CategoryStack from "../category/CategoryStack";
import FavouriteStack from "../favourites/FavouritesStack";
import ProfileStack from "../profile/ProfileStack";

const Tab = createBottomTabNavigator<BottomTabParamsList>();
type NavigationProps = BottomTabScreenProps<BottomTabParamsList>;

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          padding: 4,
          borderColor: "transparent",
          borderTopWidth: 0,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={RecipeStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "gray",
        }}
        listeners={({ navigation }: NavigationProps) => ({
          tabPress: () => {
            navigation.jumpTo("Home", { screen: "Main" });
          },
        })}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "gray",
        }}
        listeners={({ navigation }: NavigationProps) => ({
          tabPress: () => {
            navigation.jumpTo("Category", { screen: "CategoryMain" });
          },
        })}
      />

      <Tab.Screen
        name="Favourite"
        component={FavouriteStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "gray",
        }}
        listeners={({ navigation }: NavigationProps) => ({
          tabPress: () => {
            navigation.jumpTo("Favourite", { screen: "FavouriteMain" });
          },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "gray",
        }}
        listeners={({ navigation }: NavigationProps) => ({
          tabPress: () => {
            navigation.jumpTo("Profile", { screen: "ProfileMain" });
          },
        })}
      />
    </Tab.Navigator>
  );
}
