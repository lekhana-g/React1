import React from 'react';
import ReactDOM from 'react-dom';
// import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
// import ContentComponent from "./components/ContentComponent";
// import App from "./components/UsingProps";

// var details={
//     name:'ram',
//     age:21
// }

// ReactDOM.render((
//     <div>
// <App details={details} userName="lekhana" age="21"></App>
// <App details={details} userName="devasena" age="21"></App>
// </div>
// ), document.getElementById("root"))

//----------------------------------------------


// import App from "./components/EmployeeListComponent"

// var details = {
//     name: "User1",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 1
// }
// //we cannot pass details like this for some 1000 objects.Also we cannot let a user change the value of the object properties.
// //We use destructuring to remove those.
// //<App details={details}></App> - directly passing the object.Below destructuring is done ...
// ReactDOM.render((
//     <div>
//    <App {...details}></App>
//     </div>
// ),document.getElementById("root"))

//---------------------------------
// var empList = [{
//     name: "Maya",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 1
// }, {
//     name: "Meha",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 2
// }, {
//     name: "lekhana",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 3
// },{
//     name: "devasena",
//     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
//     createdAt: "Today",
//     id: 4
// }]


// ReactDOM.render(<App empList={empList}></App>, document.getElementById("root"))


// import App from "./components/Counter"
// var i=0;
// setInterval(function(){
// i=i+1;
// ReactDOM.render(<App count={i}></App>,document.getElementById('root'))
// },1000);

// import App from "./classcomponents/ActivityComponent"
// ReactDOM.render(<App></App>, document.getElementById("root"))

import App from "./hookscomponents/Hirerarchy"
ReactDOM.render(<App></App>,document.getElementById("root"))