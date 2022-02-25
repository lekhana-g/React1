function ButtonComponent(Component){
    function HOC(){
        return(
           <div>
               <B1Component></B1Component>
               <B2Component></B2Component>
               <B3Component/>
           </div> 
        )

    }
    return HOC;
}
function B1Component(){
    return(
        <div>
            <button>Edit</button>
        </div>
    )
}

function B2Component(){
    return(
        <div>
            <button>Edit</button><br/>
            <button>Delete</button>
        </div>
    )
}

function B3Component(){
    return(
        <div>
            <p>No button</p>
        </div>
    )
}
var NewComponent = ButtonComponent(B1Component)
export var NewOtherComponent = ButtonComponent(B2Component)
export default NewComponent;
