import { AuthContext } from "@/auth/AuthContext";
import { useContext } from "react";

export const fetchUserData = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    throw new Error("Unable to fetch user data.");
  }
  return user;
};
