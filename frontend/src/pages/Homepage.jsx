import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Homepage.css';


export class Homepage extends React.Component {

    render () {
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
                                <Link to = { '/viewjobs' } className = "btn btn-warning m-2"> View Jobs</Link> 
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
    }

}