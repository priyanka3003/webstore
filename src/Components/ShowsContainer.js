import React, {useContext} from 'react'
import Shows from "./Shows"
import ShowsContext from "../context/ShowsContext"

const ShowsContainer = () => {

    const {shows} = useContext(ShowsContext);

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>TV Shows</h5>
                </div>
                
                <div className="movieCont">
               
                    {shows.map((show)=>(
                        <Shows 
                        id={show.id} 
                        key={show.id} 
                        image={show.image} 
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ShowsContainer
