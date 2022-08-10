import React from 'react'
import {Link} from "react-router-dom";
import { Navbar, Nav, Container, Button,FormControl, Form } from 'react-bootstrap'
import image1 from "../img/logo.jpg";

const Navigation = () => {
    return (
        <>
            <Navbar className="navbar" collapseOnSelect fixed="top" expand='sm' variant="dark">
                <Navbar.Brand href="#home">
                    <img src={image1} className="logo" alt="logo"/>
                    <span>
                        <h4>My Site</h4>
                    </span>
                </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="topNav">
                        <Nav className="allLinks">
                            <Nav.Link className="home" href="/">Home</Nav.Link>
                            <Nav.Link href="/listings">Listings</Nav.Link>
                            <Nav.Link href="/showings">Showing</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="col-sm-4 text-center">
                <Form inline className="searchForm">
                    <input type="text" placeholder="Search" className="mr-sm-1" />
                    <span>
                        <Button type="submit">Search</Button>
                    </span>
                    
                </Form>
                </div>
                <Nav className="ml-auto px-2">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>

        </>
    )
}

export default Navigation;
