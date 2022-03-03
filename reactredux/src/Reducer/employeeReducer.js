export default function employeeReducer(store = [], action) {
    if(action.type === "SAVE_EMPLOYEES") {
        return action.payload;
    }

    if(action.type === "DELETE_EMPLOYEES") {
        return [];
    }
    
    if(action.type === "DELETE_SPECIFIC_EMPLOYEES") {
        return store.filter((employee) => {
            return employee.id != action.payload
        })
    }

    return store;
}