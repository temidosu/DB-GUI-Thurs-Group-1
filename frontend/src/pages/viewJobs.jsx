import React,  { useState, useEffect } from 'react'; 
import reactDom from 'react-dom';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Job } from '../models/jobs'; 
import './viewJobs.css';

export class ViewJobs extends React.Component {

    state = {
        jobs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
    repo = new Repository(); 
    //repo.getJobs().then(x => { setState(x));


    render() {
        return <>  
            <div class = "container">
                <h1 class = 'display-1'> Job List </h1> 
                <div class = "row">
                    {
                    this.state.jobs.map((x,i) => 
                    <div class = "col-4">
                        <div class="card">
                            <div class="card-body">
                                <div class = "row">
                                    <div class = "col-3 pr-1">
                                        <img src = {'https://besthomeinthesouth.com/wp-content/uploads/2018/08/soil-testing-550px-onsite-256x256.jpg'} className = "h-100 w-100"/>
                                    </div> 
                                    <div class = "col-9">
                                        <div class = "row">
                                        <h4>Job Title</h4>
                                        </div>
                                        <div class = "row">
                                            <p class = ".text-muted"> Contact: Bob Hirer bob@hirer.com 123-123-1234</p> 
                                        </div>
                                    </div> 
                                </div> 
                                <div class = "row">
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>)
                    }
                </div>
            </div>
        </>
    }

    
}