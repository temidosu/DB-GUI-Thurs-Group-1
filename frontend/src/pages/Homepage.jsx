import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Homepage.css';
import { Dashboard } from "./Dashboard"; 
import { Repository } from "../api/repository"; 

export class Homepage extends React.Component {

    repo = new Repository();

    state = {
        firstName: "",
        lastName: "", 
        role_id: "", 
        user_id: "",
        isLoaded: false 
    }

    isLoggedIn = () => {
        let loggedIn = localStorage.getItem("userID") && localStorage.getItem("userID") != "null";
        return loggedIn;
    }

    componentDidMount()
    {   
        if(this.isLoggedIn()) {
            this.repo.getUserInfo(localStorage.getItem("userID"))
            .then(data => {
                console.log(data);
                this.setState({firstName: data[0].firstName, lastName: data[0].lastName, role_id: data[0].role_id, user_id: data[0].user_id, isLoaded: true})
            })
            .catch(err => {
                console.log("No user info found")
            })
        }
    }

    render () {
    if(this.isLoggedIn())
    {   
        return <Dashboard user = {this.state}/> 
    } 
    // else if(!this.state.isLoaded)
    // {
    //     return <div> loading... </div>
    // }
    // else 
    // {
        return (
        <div className="landing-container h-100">
            <div className="h-100 row text-center justify-content-center align-items-center">
                <div>
                    <h1 className="mx-auto display-1 text-white">
                        <span id="logoName">Construct Work</span>
                    </h1>
                    <p className="text-white text-lg-left pl-3 lead">
                        Let's Work Smarter.
                    </p>
                    <div className="mx-auto justify-content-center">
                        {
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to = { '/login' } className = "btn btn-secondary m-2"> Log In</Link> 
                                    <Link to = { '/signup' } className = "btn btn-secondary m-2"> Register</Link> 
                                </div>

                            </div>
                        }
                        
                        <div className="row">
                            <div className="col-md-12">
                                <Link to = { '/view projects' } className = "btn btn-warning m-2"> View Projects</Link> 
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
        );
    }

}