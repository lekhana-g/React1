import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import * as actions from "../Actions/empAction";

class AppComponent extends React.Component {

    render() {
        return (
            <div>
                <input type="button" value="Get Data" onClick={this.getEmployeeList} /><br/><br/>
                <input type="button" value="delete all" onClick={this.DeleteEmployeeList}/><br/><br/>
                
                {this.props.employees.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.id} {...employee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }   
    //ACTION GETS DISPATCHED, REDUCERS TAKES CARE OF THAT ACTION
    //setEmployeeList is from empAction.js in Actions folder
    //it has an i/p list , contains a type and payload.
    //the type in empAction.js should be same as that of the reducer. 
    //in the reducer we have rootreducer that combines everything
    getEmployeeList = () => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.props.setEmployeeList(response.data)
        })
    }

    DeleteEmployeeList =() =>{
            this.props.deleteAllEmployees()
    }
    
}

function EmployeeDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }
    };

    return (
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                      <h3>{props.name}</h3>
                      <div>
                        <p className="card-text">{props.id} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <input type="button" id={props.id} className="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                    <input style={{marginLeft: "5px"}} type="button" name={props.id} className="btn btn-primary" value="Update" onClick={props.updateEmployee} />
                  </div>
              </div>
          </div>
    )
}

//name should be the same name as in root reducer
function mapPropsToStore(store) {
    return {
        employees: store.emp,
        movies: store.movies,
        flights: store.flights,
    }
}

//connect is used to connect a react component to a redux store.
export default connect(mapPropsToStore, actions)(AppComponent)