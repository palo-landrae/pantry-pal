import { Recipe } from "@/types/Recipe";

export type RecipeStackParamList = {
  Main: undefined;
  RecipeDetails: { recipe: Recipe };
};
