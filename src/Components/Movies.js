import React, {useContext} from 'react'
//import movieContext from "../context/moviesContext";
import "../css/index.css"
import {Card} from "react-bootstrap";

const Movies = (props) => {

    
    return (
        <div className="col-xm">
            <Card style={{width:"1em"}}>
                <Card.Img className="image" variant="top" src={props.image}  alt="myImage"/> 
                {/* <Card.Img variant="top" src={`../img/movies/adam.jpg`} alt=""/> */}
            </Card>
        </div>
    );
}

export default Movies

