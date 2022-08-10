import React from 'react'
import { Card } from 'react-bootstrap'

const FeaShows = (props) => {
    return (
        <div className="col-xm">
            <Card style={{width:"1em"}}>
                <Card.Img className="image" variant="top" src={props.image}  alt="myImage"/> 
                {/* <Card.Img variant="top" src={`../img/movies/adam.jpg`} alt=""/> */}
            </Card>
        </div>
    )
}

export default FeaShows
