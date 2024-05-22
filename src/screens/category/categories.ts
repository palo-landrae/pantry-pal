import { ImageURISource } from "react-native";

interface Category {
  category_name: string;
  category_icon: ImageURISource;
}

export const categories: Category[] = [
  {
    category_name: "Fruits",
    category_icon: require("assets/images/categories/fruits.jpg"),
  },
  {
    category_name: "Vegetables",
    category_icon: require("assets/images/categories/broccoli.jpg"),
  },
  {
    category_name: "Dairy",
    category_icon: require("assets/images/categories/dairy.jpg"),
  },
  {
    category_name: "Beef",
    category_icon: require("assets/images/categories/beef.jpg"),
  },
  {
    category_name: "Chicken",
    category_icon: require("assets/images/categories/chicken.jpg"),
  },
  {
    category_name: "Pork",
    category_icon: require("assets/images/categories/pork.jpg"),
  },
  {
    category_name: "Condiments",
    category_icon: require("assets/images/categories/pepper.png"),
  },
  {
    category_name: "Seafood",
    category_icon: require("assets/images/categories/fish.jpg"),
  },
  {
    category_name: "Cereals",
    category_icon: require("assets/images/categories/cereals.png"),
  },
];
