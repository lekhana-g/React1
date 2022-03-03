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

export function deleteOneEmployee(empId) {
    return {
        type: "DELETE_SPECIFIC_EMPLOYEES",
        payload: empId
    }
}