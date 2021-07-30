import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ACTIONTYPE, SearchReducer } from "./SearchReducer";

interface SearchContextInterface {
  searchList: string[];
  searchListDispatch: React.Dispatch<ACTIONTYPE>;
}

const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

export const useSearch = () => useContext(SearchContext);
