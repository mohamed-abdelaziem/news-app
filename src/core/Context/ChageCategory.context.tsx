import { createContext, useState } from "react";

export type CategoryContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextType | null>(null);

export default function ChageCategoryContextProvider(props: any) {
  const [category, setCategory] = useState<string>("all");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {props.children}
    </CategoryContext.Provider>
  );
}
