import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter,Route} from "react-router-dom";
import {Link} from "react-router-dom"
import MainComponent from './components/MainComponent'
import UpdateComponent from './components/UpdateComponent'
import AddComponent from './components/AddComponent'


function App() {
  return (
    <div>
      <BrowserRouter>
         <div>
           <HeaderComponent/>
         </div>
      </BrowserRouter>
    </div>
  )
}
function HeaderComponent() {
  return (
      <div>
          <h1>CRUD operation</h1>
          <nav>
              <Link style={{margin: "10px"}} to="/">Product Details</Link>
              <Link style={{margin: "10px"}} to="/Add">Add new product</Link>
              <Link style={{margin: "10px"}} to="/Update/id">Update product</Link>
          </nav>
            <Route exact path="/" component={MainComponent}></Route>
            <Route exact path="/Update/id" component={UpdateComponent}></Route>
            <Route exact path="/Add" component={AddComponent}></Route>
      </div>
  )
}

export default App

ReactDom.render(<App></App>,document.getElementById("root"))

