import React, { createContext, useState } from "react";
import type { Food } from "@/types/Food";

interface FoodContextProps {
  foods: Food[];
  setFoods: React.Dispatch<React.SetStateAction<Food[]>>;
}
export const FoodContext = createContext({} as FoodContextProps);

type FoodProviderProps = {
  children: React.ReactNode;
};

const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<Food[] | null>([]);

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
