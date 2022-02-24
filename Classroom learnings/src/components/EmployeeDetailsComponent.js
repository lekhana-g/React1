export default function EmployeeDetailsComponent(props) {
    var styleObject =  {
        width: "18rem", 
        margin: "20px", 
        display: "inline-block"
    };
    //this styleObject can be passed as style={styleObject}
    //we can create a css file and import it
    //we can create a styles folder and add css files in it and just import
    //we can use inline css
    //we can use bootstrap to style
    return (
          <div className="card" style={{width: "18rem", margin: "20px", display: "inline-block"}}>
              <img src={props.avatar} className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  {/* Conditional checking is performed */}
                  { props.id % 2 !== 0 && <h5 className="card-title">{props.name}: Odd Id Value</h5>}
                  { props.id % 2 === 0 && <h5 className="card-title">{props.name}: Even Id Value</h5>}
                  <p className="card-text">{props.id} <b>{props.createdAt}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <input type="button" className="btn btn-primary" value="Go somewhere" />
              </div>
          </div>
    )
}
//previously we used props.details.avatar, but now we can use props.avatar directly


