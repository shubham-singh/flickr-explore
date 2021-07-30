export type ACTIONTYPE = { type: "ADD"; payload: string } | { type: "CLEAR" };

export const SearchReducer = (state: string[] | null, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD":
      if (Array.isArray(state)) {
        if (state.includes(action.payload)) {
          return state;
        }
        else {
          localStorage.setItem(
            "search_list",
            JSON.stringify([...state, action.payload])
          );
          return [...state, action.payload];
        }
      } else {
        localStorage.setItem("search_list", JSON.stringify([action.payload]));
        return [action.payload];
      }
    case "CLEAR":
      localStorage.setItem("search_list", JSON.stringify(null));
      return null;
  }
};
