import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/ListingPage";
import Register from "./Register"
import Login from "./Login"
import ShowPage from "../pages/Shows"
import RecentlyAdded from "../pages/RecentlyAdded"
import Data from "../db.json"
import MovieContainer from "./MovieContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import {useState, useEffect} from "react";
import ShowsContext from "../context/ShowsContext"
import movieContext from "../context/moviesContext";
import FeaturedMovieContext from "../context/FeaturedMovieContext";
import FeaturedShowContext from "../context/FeaturedShowContext";
import UserContext from "../context/UserContext";
import ActiveContext from "../context/activeContext";
import RecentMovieContext from "../context/RecentMovieContext";



function App() {
  const data = require("../db.json");
  //const data = Data.movies

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(data)
    .then((res)=>{
      return data.movies
    })
    .then((json) => {
      setMovies(json);
    })
    .catch((err)=>{
      console.log(`Error ${err}`);
    });

  },[]);

  const [featuredMovies, setFeaturedMovies] = useState([]);
  useEffect(() => {

    fetch(data)
    .then((res)=>{
      return data.featuredMovies
    })
    .then((json) => {
      setFeaturedMovies(json);
    })
    .catch((err)=>{
      console.log(`Error ${err}`);
    });

  },[]);

  const [featuredShows, setFeaturedShows] = useState([]);
  useEffect(() => {

    fetch(data)
    .then((res)=>{
      return data.featuredShows
    })
    .then((json) => {
      setFeaturedShows(json);
    })
    .catch((err)=>{
      console.log(`Error ${err}`);
    });

  },[]);

  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {

    fetch(data)
    .then((res)=>{
      return data.recentMovies
    })
    .then((json) => {
      setRecentMovies(json);
    })
    .catch((err)=>{
      console.log(`Error ${err}`);
    });

  },[]);

  const [shows, setShows] = useState([]);

  useEffect(() => {

    fetch(data)
    .then((res)=>{
      return data.shows
    })
    .then((json) => {
      setShows(json);
    })
    .catch((err)=>{
      console.log(`Error ${err}`);
    });

  },[]);

  const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch(data)
            .then(() => {
                return data.allUsers;
            })
            .then((json) => {
                setAllUsers(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    }, []);

    const [activeUser, setActiveUser] = useState({
      id: "",
      Username: "",
      FirstName: "",
      LastName: "",
      Email: "",
  });

  return (
    <div className="">
       <UserContext.Provider value={{ allUsers }}>
          <ActiveContext.Provider value={{ activeUser, setActiveUser }}>
            <Router>
              <div>
                <Switch>
                  <movieContext.Provider value={{movies, setMovies}}>
                  <ShowsContext.Provider value={{shows, setShows}}>
                  <FeaturedMovieContext.Provider value={{featuredMovies, setFeaturedMovies}}>
                  <FeaturedShowContext.Provider value={{featuredShows, setFeaturedShows}}>
                  <RecentMovieContext.Provider value={{recentMovies, setRecentMovies}}>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route path="/recent">
                      <RecentlyAdded />
                    </Route>
                    <Route path="/showings">
                      <ShowPage />
                    </Route>
                    <Route path="/listings">
                      <ListingPage />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/register">
                      <Register />
                    </Route> 
                  </RecentMovieContext.Provider>
                  </FeaturedShowContext.Provider>
                  </FeaturedMovieContext.Provider>
                  </ShowsContext.Provider>
                  </movieContext.Provider>

                </Switch>
            
              </div>
            </Router>
          </ActiveContext.Provider>
        </UserContext.Provider>
      
    </div>
  );
}

export default App;
