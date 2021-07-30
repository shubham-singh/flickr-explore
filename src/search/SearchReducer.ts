type ACTIONTYPE = 
    | { type: "ADD", payload: string }
    | { type: "CLEAR" };

export const SearchReducer = (state: string[] | null, action: ACTIONTYPE) => {
    switch(action.type) {
        case "ADD":
            if (Array.isArray(state)) {
                return [...state, action.payload]
            } else return [action.payload]
        case "CLEAR":
            return []
    }
}