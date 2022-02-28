export default function employeeReducer(store = [], action) {
    if(action.type === "SAVE_EMPLOYEES") {
        return action.payload;
    }

    if(action.type === "DELETE_EMPLOYEES") {
        return [];
    }
    
    if(action.type === "DELETEBYID"){
        return action.payload
    }

    return store;
}