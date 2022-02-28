export default function movieReducer(store = [], action) {
    if(action.type === "SAVE_MOVIES") {
        return action.payload;
    }

    if(action.type === "DELETE_MOVIES") {
        return [];
    }

    return store;
}