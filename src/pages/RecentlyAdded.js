import React from 'react'
import RecentContainer from "../Components/recentContainer";
import Navigation from '../Components/Navbar';
import ButtonSwitch from '../Components/ButtonSwitch';
import Footer from '../Components/Footer';

const RecentlyAdded = () => {
    return (
        <div>
            <Navigation />
            <ButtonSwitch />
            <RecentContainer />
            <Footer />

        </div>
    )
}

export default RecentlyAdded
