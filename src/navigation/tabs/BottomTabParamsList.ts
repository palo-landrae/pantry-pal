import { NavigatorScreenParams } from "@react-navigation/native";
import { RecipeStackParamList } from "../recipe/RecipeStackParamsList";
import { CategoryStackParamList } from "../category/CategoryStackParamsList";
import { FavouriteStackParamsList } from "../favourites/FavouriteStackParamsList";
import { ProfileStackParamsList } from "../profile/ProfileStackParamsList";

export type BottomTabParamsList = {
  Home: NavigatorScreenParams<RecipeStackParamList>;
  Category: NavigatorScreenParams<CategoryStackParamList>;
  Favourite: NavigatorScreenParams<FavouriteStackParamsList>;
  Profile: NavigatorScreenParams<ProfileStackParamsList>;
};
