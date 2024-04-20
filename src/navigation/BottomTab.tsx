import { BottomTabParamsList } from "./BottomTabParamsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "@/screens/MainScreen";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator<BottomTabParamsList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarStyle: {
          padding: 4,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          borderTopWidth: 0,
          position: "absolute",
          overflow: "hidden",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}
