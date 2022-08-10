import React from 'react'
import { Nav, Button, Card } from "react-bootstrap";

const EachCard = (props) => {
    return (
        <div className="col-sm">
            <Card style={{width:"50px"}}>
                <Card.Img variant='top' src={'${props.Image}'} />
            </Card>
            
        </div>
    )
}

export default EachCard;
