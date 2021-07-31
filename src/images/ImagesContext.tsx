import React, { createContext, useContext, useReducer } from "react";
import { ACTIONTYPE, ImagesReducer } from "./ImagesReducer";

export interface ImagesState {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: number,
    isfriend: number,
    isfamily: number
}

export interface ImagesInterface {
    images: ImagesState[],
    page: number,
    search: string | null
}

interface ImagesContextInterface {
    images: ImagesInterface,
    imagesDispatch: React.Dispatch<ACTIONTYPE>
}

const ImagesContext = createContext<ImagesContextInterface | null>(null);

export const ImagesContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [images, dispatch] = useReducer(ImagesReducer, {
        images: [],
        page: 1,
        search: null
    })
    return (
        <ImagesContext.Provider value={{images, imagesDispatch: dispatch}}>
            {children}
        </ImagesContext.Provider>
    )
}

export const useImages = () => useContext(ImagesContext);