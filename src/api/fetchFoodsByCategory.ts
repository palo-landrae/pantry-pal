import { supabase } from "@/lib/supabase";

export const fetchFoodsByCategory = async ({ queryKey }) => {
  const [_, category] = queryKey;
  const { data, error } = await supabase
    .from("foods")
    .select()
    .eq("food_category", category)
    .order("food_name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
