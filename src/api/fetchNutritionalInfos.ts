import { supabase } from "@/lib/supabase";
export const fetchNutritionalInfos = async ({ queryKey }) => {
  const [_, recipeId] = queryKey;
  const { data, error } = await supabase
    .from("nutritional_infos")
    .select("*")
    .eq("recipe_id", recipeId);

  if (error) {
    throw new Error(error.message);
  }

  if (data === undefined || data.length === 0) throw new Error("No Data");
  return data[0];
};
