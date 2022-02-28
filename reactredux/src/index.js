import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import AppComponent from "./components/AppComponent";
import EmployeeCountComponent from "./components/EmployeeCountComponent";
import rootReducer from "./Reducer/index";

var appStore = createStore(rootReducer)
//we use rootReducer when we are creating a store
ReactDOM.render((
    <Provider store={appStore}>
        <EmployeeCountComponent></EmployeeCountComponent>
        <AppComponent></AppComponent>
    </Provider>
), document.getElementById("root"))

