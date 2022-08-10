import React from 'react'
import ListingPage from "../pages/HomePage";
import Header from "../Components/Header";
import MovieContainer from "../Components/MovieContainer";
import Hero from "../Components/Hero";
import ContentContainer from "../Components/ContentContainer.js";
import FeaturedShows from "../Components/FeaturedShows";
import FeaturedMovies from "../Components/FeaturedMovies";
import Contents from "../Components/Contents";
import Footer from "../Components/Footer";

const HomePage = () => {


    
    return (

        <div>
            <div className="head-class">
                <Header />
            </div>
            <div>
            <FeaturedMovies />
            
            <FeaturedShows />
            <ContentContainer />           
            </div>
            <Footer />
        </div>

    )
}

export default HomePage
