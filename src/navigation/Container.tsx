import React from "react";
import AuthProvider from "@/auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";

type AppContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <NavigationContainer>
      <AuthProvider>{children}</AuthProvider>
    </NavigationContainer>
  );
};

export default Container;
