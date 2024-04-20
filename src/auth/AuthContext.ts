import React, { createContext } from "react";
import { UserData as User } from "@/types/UserData";
import { Session } from "@supabase/supabase-js";

interface AuthContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  session: Session;
  isRecovery: boolean;
  setIsRecovery: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext({} as AuthContextProps);
