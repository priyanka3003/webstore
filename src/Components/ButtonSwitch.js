import React from 'react'
import { Nav, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonSwitch = () => {
    return (
        <div className="container">
            <div className="button-container">
                <ButtonGroup  className="button-group" aria-label="test">
                        
                        <Link to="/listings"><Button className="buttons" variant="primary">Most Watched</Button></Link>
                        <Link to="/showings"><Button className="buttons" variant="primary">Most Rated</Button></Link>
                        <Link to="/recent"><Button className="buttons" variant="primary">Recently Added</Button></Link>
                    </ButtonGroup>

            </div> 
        </div>
    )
}

export default ButtonSwitch
