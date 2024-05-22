export type Recipe = {
  recipe_id: number;
  recipe_name: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  image_url: string;
  description: string;
  matched_foods_count?: number;
};
