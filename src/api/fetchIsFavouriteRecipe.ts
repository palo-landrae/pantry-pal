import { supabase } from "@/lib/supabase";

export const fetchIsFavouriteRecipe = async ({ queryKey }) => {
  const [_, recipeId, userId] = queryKey;
  const { data, error } = await supabase
    .from("favourites")
    .select()
    .eq("recipe_id", recipeId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
