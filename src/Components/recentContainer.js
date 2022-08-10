import React, {useContext} from 'react'
import Recent from "./recent"
import RecentMovieContext from "../context/RecentMovieContext";


const RecentContainer = () => {
    const {recentMovies} = useContext(RecentMovieContext);

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>Recently Added Movies</h5>
                </div>
                
                <div className="movieCont1">
               
                    {recentMovies.map((recentMovie)=>(
                        <Recent 
                        id={recentMovie.id} 
                        key={recentMovie.id} 
                        image={recentMovie.image} 
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default RecentContainer
