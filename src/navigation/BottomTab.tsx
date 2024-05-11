import { BottomTabParamsList } from "./BottomTabParamsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "@/screens/MainScreen";

import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import ProfileScreen from "@/screens/ProfileScreen";
import RecipeStack from "./RecipeStack";
import FavouriteScreen from "@/screens/FavouriteScreen";

const Tab = createBottomTabNavigator<BottomTabParamsList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
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
          tabBarActiveTintColor: "#f28585",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bowl-food" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: "#F28585",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: "#F28585",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size - 2} color={color} />
          ),
          tabBarActiveTintColor: "#F28585",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}
