import { ImagesInterface, ImagesState } from "./ImagesContext";

export type ACTIONTYPE =
  | { type: "SET_IMAGES"; payload: ImagesState[] }
  | { type: "RESET_PAGE" }
  | { type: "SET_SEARCH"; payload: string };

export const ImagesReducer = (state: ImagesInterface, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_IMAGES":
      if (state.page === 1) {
        return {
          ...state,
          page: state.page + 1,
          images: action.payload,
        };
      } else {
        return {
          ...state,
          page: state.page + 1,
          images: [...state.images, ...action.payload],
        };
      }

    case "RESET_PAGE":
        return {
            ...state,
            page: 1
        }
    
    case "SET_SEARCH":
        return {
            ...state,
            search: action.payload
        }

    default:
        return state
  }
};
