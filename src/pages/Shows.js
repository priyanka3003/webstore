import React from 'react'
import Navigation from '../Components/Navbar'
import FeaturedShows from '../Components/FeaturedShows'
import FeaturedMovies from '../Components/FeaturedMovies'
import Footer from '../Components/Footer'
import ButtonSwitch from '../Components/ButtonSwitch'

const ShowPage = () => {
    return (
        <div>
            <Navigation />
            <ButtonSwitch />
            <FeaturedShows />
            <FeaturedMovies />
            <Footer />
        </div>
    )
}

export default ShowPage
