import React from "react";
import AuthProvider from "@/auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts, MavenPro_500Medium } from "@expo-google-fonts/maven-pro";
import FoodProvider from "@/lib/FoodContext";

type AppContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<AppContainerProps> = ({ children }) => {
  const [loaded] = useFonts({
    MavenPro_500Medium,
  });
  const queryClient = new QueryClient();

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <FoodProvider>{children}</FoodProvider>
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Container;
