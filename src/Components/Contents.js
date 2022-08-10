import React from 'react'
import ReactRoundedImage from "react-rounded-image";



const Contents = (props) => {
    return (
        <div className="each-container">
            
            
            <img src={props.image} id="rounded" className="col-4"/>
        </div>
    )
}

export default Contents
