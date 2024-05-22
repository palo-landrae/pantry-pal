import { Recipe } from "@/types/Recipe";

export type FavouriteStackParamsList = {
  FavouriteMain: undefined;
  RecipeDetails: { recipe: Recipe };
};
