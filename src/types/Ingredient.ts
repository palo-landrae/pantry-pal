import { Food } from "./Food";

export interface Ingredient {
  ingredient_id: number;
  quantity: string;
  measurement_unit: string;
  recipe_id: number;
  food_id: number;
  foods?: Food;
}
