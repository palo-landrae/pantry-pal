import { supabase } from "@/lib/supabase";

export const fetchFavouriteRecipes = async ({ queryKey }) => {
  const [_, userId] = queryKey;
  const { data, error } = await supabase
    .from("favourites")
    .select(`*, recipes (*)`)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }
  return data.map((item) => item.recipes);
};
