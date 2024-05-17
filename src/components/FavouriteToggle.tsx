import { Favourite } from "@/types/Favourite";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { fetchIsFavouriteRecipe } from "@/api/fetchIsFavouriteRecipe";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { deleteFavouriteRecipe } from "@/api/deleteFavouriteRecipe";
import { supabase } from "@/lib/supabase";
import { COLORS } from "@/types/Colors";

type Props = Omit<Favourite, "favourite_id">;

const FavouriteToggle = (props: Props) => {
  const { data: favourites, refetch: refetchFavourites } = useQuery<
    Favourite[]
  >({
    queryKey: ["is_favourite", props.recipe_id, props.user_id],
    queryFn: fetchIsFavouriteRecipe,
  });

  const updateIsFavourite = useCallback(() => {
    setIsFavourite(favourites?.length >= 1 ?? false);
  }, [favourites]);

  useEffect(() => {
    updateIsFavourite();
  }, [updateIsFavourite]);

  const [isFavourite, setIsFavourite] = useState<boolean>(
    favourites?.length >= 1 ?? false,
  );

  const { mutate: toggleFavourite } = useMutation({
    mutationFn: async () => {
      const newIsFavourite = !favourites || favourites.length === 0;
      if (!newIsFavourite) {
        await deleteFavouriteRecipe({
          recipe_id: props.recipe_id,
          user_id: props.user_id,
        });
      } else {
        await supabase
          .from("favourites")
          .insert({ recipe_id: props.recipe_id, user_id: props.user_id });
      }
    },
    onSuccess: () => {
      setIsFavourite(!isFavourite);
      refetchFavourites();
    },
  });
  return (
    <TouchableOpacity onPress={() => toggleFavourite()}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? COLORS.primary : "gray"}
      />
    </TouchableOpacity>
  );
};

export default FavouriteToggle;
