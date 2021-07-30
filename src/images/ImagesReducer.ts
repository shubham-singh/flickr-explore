import { ImagesInterface, ImagesState } from "./ImagesContext"

export type ACTIONTYPE = 
    | { type: "SET_IMAGES", payload: ImagesState[] }

export const ImagesReducer = (state: ImagesInterface, action: ACTIONTYPE) => {
    switch(action.type) {
        case "SET_IMAGES":
            return {
                images: action.payload
            }
    }
}