import React from 'react'
import EachCard from './Card'
import FeaturedMovieContext from "../context/FeaturedMovieContext";
import {useContext} from "react";
import FeaMovie from "./feaMovie"

const FeaturedMovies = () => {
    
    
    const {featuredMovies} = useContext(FeaturedMovieContext);
    return (
        <div className="container">
            <div className="row1">
                <div className="list-header">
                    <h5>Featured Movies</h5>
                </div>
                <div className="movieCont">
                    {featuredMovies.map((featuredMovie) => (
                        <FeaMovie 
                            key={featuredMovie.id}
                            id={featuredMovie.id}
                            image={featuredMovie.image}
                        />
                    ))}
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovies
