import { supabase } from "@/lib/supabase";

export const fetchAllRecipes = async () => {
  const { data, error } = await supabase.from("recipes").select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
