import React, { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { UserData } from "@/types/UserData";
import { getUserData } from "./AuthActions";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isRecovery, setIsRecovery] = useState<boolean>(false);

  const getProfile = async (id: string) => {
    const userData = await getUserData(id);
    setUser(userData);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        switch (_event) {
          case "SIGNED_IN":
            getProfile(session?.user.id);
            break;
          case "INITIAL_SESSION":
            if (session) getProfile(session?.user.id);
            break;
          default:
            setUser(null);
            break;
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe;
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        session,
        isRecovery,
        setIsRecovery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
