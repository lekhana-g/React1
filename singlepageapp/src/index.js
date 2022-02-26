import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter,Route} from "react-router-dom";
import {Link} from "react-router-dom"
import MainComponent from './components/MainComponent'
import UpdateComponent from './components/UpdateComponent'
import AddComponent from './components/AddComponent'
import {Routes} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
         <div>
         <h1 style={{textAlign:"center",paddingTop:"10px"}}>CRUD operation</h1>
          <nav>
              <Link style={{margin: "10px",paddingLeft:"480px"}} to="/">Product Details</Link>
              <Link style={{margin: "10px"}} to="/Add">Add new product</Link>
              <Link style={{margin: "10px"}} to="/Update/id">Update product</Link>
              <hr/>
          </nav>
          <Routes>
            <Route exact path="/" element={MainComponent()}></Route>
            <Route exact path="/Update/id" element={UpdateComponent()}></Route>
            <Route exact path="/Add" element={AddComponent()}></Route>
          </Routes>
         </div>
      </BrowserRouter>
    </div>
  )
}
// function HeaderComponent() {
//   return (
//       <div>
//           <h1 style={{textAlign:"center",paddingTop:"10px"}}>CRUD operation</h1>
//           <nav>
//               <Link style={{margin: "10px",paddingLeft:"480px"}} to="/">Product Details</Link>
//               <Link style={{margin: "10px"}} to="/Add">Add new product</Link>
//               <Link style={{margin: "10px"}} to="/Update/id">Update product</Link>
//               <hr/>
//           </nav>
//           <Routes>
//             <Route exact path="/" element={<MainComponent/>}></Route>
//             <Route exact path="/Update/:id" element={<UpdateComponent/>}></Route>
//             <Route exact path="/Add" element={<AddComponent/>}></Route>
//           </Routes>
//       </div>
//   )
// }

export default App

ReactDom.render(<App></App>,document.getElementById("root"))

