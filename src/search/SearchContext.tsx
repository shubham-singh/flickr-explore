import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { SearchReducer } from "./SearchReducer";

const SearchContext = createContext<unknown>(null);

export const SearchContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [searchList, dispatch] = useReducer(
    SearchReducer,
    JSON.parse(localStorage.getItem("search_list") as string)
  );

  return (
    <SearchContext.Provider
      value={{ searchList, searchListDispatch: dispatch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
