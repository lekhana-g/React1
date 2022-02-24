export default function FlightDetails(props) {
    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }
    };
    return (
          <div className="card" style={styleObject.containerStyle}>
              <div className="card-body">
                    <div>
                        <p className="card-text">{props.fid} <br/> {props.fname} <br/>{props.source} <br/> {props.destination} <br/> {props.departuretime} <br/> {props.arrivaltime} <br/> {props.totalcapacity} <br/> {props.costperseat}</p>
                    </div>
                    <input type="button" className="btn btn-primary" value="Delete" onClick={props.deleteFlight} />
              </div>
          </div>
    )
}