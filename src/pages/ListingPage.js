import React from 'react'
import Navbar from "../Components/Navbar"
import ShowsContainer from "../Components/ShowsContainer"
import MovieContainer from "../Components/MovieContainer.js"
import ButtonSwitch from "../Components/ButtonSwitch"
import Footer from "../Components/Footer";


const ListingPage = () => {
    return (
        <div>
            <Navbar />
            <ButtonSwitch />
            <MovieContainer />
            <ShowsContainer />
            {/* <Movie /> */}
            <Footer />
        </div>
    )
}

export default ListingPage
