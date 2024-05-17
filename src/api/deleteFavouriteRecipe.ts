import { supabase } from "@/lib/supabase";
import { Favourite } from "@/types/Favourite";

type Props = Omit<Favourite, "favourite_id">;

export const deleteFavouriteRecipe = async (props: Props) => {
  const { error } = await supabase
    .from("favourites")
    .delete()
    .eq("recipe_id", props.recipe_id)
    .eq("user_id", props.user_id);

  if (error) {
    throw new Error(error.message);
  }
  return { success: true };
};
