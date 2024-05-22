import { useContext } from "react";

import { AuthContext } from "@/auth/AuthContext";
import AuthStack from "./auth/AuthStack";
import BottomTabNavigator from "./tabs/BottomTab";

export default () => {
  const { isRecovery, user } = useContext(AuthContext);

  if (!user) return <AuthStack />;
  if (!isRecovery && user) return <BottomTabNavigator />;
};
