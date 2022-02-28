import React from "react";
import { connect } from "react-redux";

class EmployeeCountComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Total Employee Count: {this.props.employees.length}</h1>
            </div>
        )
    }   
}
//this,props.employees is same as store.emp i.e it contains the same data.

function mapPropsToStore(store) {
    return {
        employees: store.emp
    }
}

export default connect(mapPropsToStore, null)(EmployeeCountComponent)