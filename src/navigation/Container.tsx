import React from "react";
import AuthProvider from "@/auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { View } from "react-native";

type AppContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<AppContainerProps> = ({ children }) => {
  const [loaded] = useFonts({
    HindSiliguri: require("../../assets/fonts/HindSiliguri-Regular.ttf"),
  });

  if (!loaded) {
    return <View></View>;
  }
  return (
    <NavigationContainer>
      <AuthProvider>{children}</AuthProvider>
    </NavigationContainer>
  );
};

export default Container;
