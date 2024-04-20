import { useContext } from "react";

import { AuthContext } from "@/auth/AuthContext";
import AuthStack from "./AuthStack";
import BottomTabNavigator from "./BottomTab";

export default () => {
  const { isRecovery, user } = useContext(AuthContext);

  if (!user) return <AuthStack />;
  if (!isRecovery && user) return <BottomTabNavigator />;
};
