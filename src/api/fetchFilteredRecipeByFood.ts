import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/Recipe";

interface Result {
  foods: { food_id: number };
  recipes: Recipe;
}

export const fetchFilteredRecipeByFood = async ({
  queryKey,
}): Promise<Recipe[]> => {
  const [_, foodIds] = queryKey;

  const { data, error } = await supabase
    .from("ingredients")
    .select("foods (food_id), recipes (*)")
    .returns<Result[]>();

  const filteredData = data.filter((item) =>
    foodIds.includes(item.foods.food_id),
  );

  const recipesMap = filteredData.reduce((acc, curr) => {
    const { recipe_id } = curr.recipes;
    acc[recipe_id] = acc[recipe_id] || {
      ...curr.recipes,
      matched_foods_count: 0,
    };
    acc[recipe_id].matched_foods_count++;
    return acc;
  }, {});

  const result = Object.values(recipesMap);

  if (error) {
    throw new Error(error.message);
  }

  return result as Recipe[];
};
