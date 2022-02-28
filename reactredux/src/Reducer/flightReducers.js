export default function flightReducer(store = [], action) {
    if(action.type === "SAVE_FLIGHTS") {
        return action.payload;
    }

    if(action.type === "DELETE_FLIGHTS") {
        return [];
    }

    return store;
}