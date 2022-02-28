export function setEmployeeList(employeeList) {
    return {
        type: "SAVE_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteAllEmployees(employeeList) {
    return {
        type: "DELETE_EMPLOYEES"
    }
}

export function deleteEmpbyId(empid){
    return{
        type:"DELETEBYID",
        payload:empid
    }
}