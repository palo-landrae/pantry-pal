import { Recipe } from "@/types/Recipe";

export type CategoryStackParamList = {
  CategoryMain: undefined;
  FoodList: { category: string };
  FridgeList: undefined;
  FilteredRecipes: { recipes: Recipe[] };
  RecipeDetails: { recipe: Recipe };
};
