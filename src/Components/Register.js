import React from 'react'
import { FormControl, Form, Button, Card } from "react-bootstrap";
//import { useContext, UseRef} from 'react';

//import NewUserContext from "./context/NewUserContext";

const Register = () => {
    return (
       <div className="register">
            <Card style={{ width: "50vw", padding: "1rem" }} className="home-card">
            <Form className="register-form" action="/" method="get">
                <h3>Register New User</h3>
                <div className="form-group">
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Name"
                    name="name"
                    />            
                </div>
                <div className="form-group">
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Email Address"
                    name="email"
                    />
                </div>
                <div className="form-group">
                    <FormControl
                        type="text"
                        id="nav-search"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div className="form-group">
                <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Confirm Password"
                    name="match"
                />
                </div>
                <Button className="register-button" type="submit">Register</Button>
            </Form>
            </Card>
                              
        </div>
    )
}

export default Register