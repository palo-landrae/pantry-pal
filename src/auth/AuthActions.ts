import { Alert } from "react-native";
import { supabase } from "@/lib/supabase";

export async function getUserData(uid: string) {
  try {
    const { data, error, status } = await supabase
      .from("users")
      .select(`*`)
      .eq("id", uid)
      .single();
    if (error && status !== 406) {
      throw error;
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
}

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) Alert.alert(error.message);
}

export async function signUpWithEmail({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) {
  const { data, error: SignUpError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (SignUpError) Alert.alert(SignUpError.message);
  const { error: InsertError } = await supabase.from("users").insert({
    id: data.user.id,
    name,
    email,
    avatarUrl: "",
  });
  if (InsertError) Alert.alert(InsertError.message);
}

export function signOut() {
  supabase.auth.signOut();
}
