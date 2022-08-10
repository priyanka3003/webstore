import React from 'react'
import FeaShows from "./feaShows"
import FeaturedShowContext from "../context/FeaturedShowContext";
import {useContext} from "react";


const FeaturedShows = () => {

    const {featuredShows} = useContext(FeaturedShowContext);

    return (
        <div className="container">
            <div className="row">
                <div className="list-header">
                    <h5>TV Shows Release</h5>
                </div>
                <div className="movieCont">
                    {featuredShows.map((featuredShow) => (
                        <FeaShows 
                            key={featuredShow.id}
                            id={featuredShow.id}
                            image={featuredShow.image}
                        />
                    ))}
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default FeaturedShows
