import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

interface LoaderContextInterface {
  loader: string;
  setLoader: React.Dispatch<React.SetStateAction<string>>;
}

const LoaderContext = createContext<LoaderContextInterface | null>(null);

export const LoaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loader, setLoader] = useState<string>("no");
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
