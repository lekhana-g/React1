export default function DataBindingComponent(){
    var username="lekhana";
    function getChangedValue(){
        debugger;
        alert("oneway databinding");
    }
    return(
        <div>
            Enter username:<input type="text" value={username} onChange={getChangedValue()}></input>
        </div>
    )
}