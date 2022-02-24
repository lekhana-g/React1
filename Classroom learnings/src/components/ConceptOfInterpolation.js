export default function ConceptOfInterpolation() {

    var userName = "User1";

    function getTime() {
        return new Date().getHours() + " : " +  new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    return (
        <div>
            <h1>The Current Time for { userName } is Given Below:</h1>
            <h2>Time: { getTime() }</h2>
        </div>
    )
}