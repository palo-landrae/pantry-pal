import { supabase } from "@/lib/supabase";
export const fetchIngredients = async ({ queryKey }) => {
  const [_, recipeId] = queryKey;
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .eq("recipe_id", recipeId);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
