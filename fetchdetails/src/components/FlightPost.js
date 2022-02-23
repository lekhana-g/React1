// import React, { Component } from 'react'
// import axios from "axios"
// class FlightPost extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             fid:'',fname:'',
//             source:'',destination:'',
//             departuretime:'',arrivaltime:'',
//             totalcapacity:'',costperseat:''
//         }
//     }
//     changeHandler = e =>{
//         this.setState({ [e.target.name]:e.target.value})
//     }
//     submitHandler=e=>{
//       axios.post("https://localhost:5001/api/Flight",this.state).then(response=>{
//           console.log(response)
//       })
//     }

//     render() {
//         const{fid,fname,source,destination,departuretime,arrivaltime,totalcapacity,costperseat}=this.state
//         return (
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <div>
//                         <input type="number" name="fid" value={fid} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="text" name="fname" value={fname} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="text" name="source" value={source} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="text" name="destination" value={destination} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="datetime-local" name="departuretime" value={departuretime} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="datetime-local" name="arrivaltime" value={arrivaltime} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="number" name="totalcapacity" value={totalcapacity} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="number" name="costperseat" value={costperseat} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default FlightPost
