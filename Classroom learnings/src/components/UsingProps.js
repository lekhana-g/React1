export default function UsingProps(props){
    //props.userName="himaja";
    //we cannot update data given to the props variable
    props.details.name="update";
    //we cannot change the object directly but we can change the property inside it.
    //never modify a prop, even if we have the privilege to do so.
    return(
        <div>
           <h1> Hello {props.userName}, Age is {props.age}</h1>
           <h1>Hi {props.details.name}</h1>
        </div>
    ) 
}