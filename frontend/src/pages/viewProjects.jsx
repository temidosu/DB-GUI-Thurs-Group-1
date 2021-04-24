import React,  { useState, useEffect } from 'react'; 
import reactDom from 'react-dom';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Project } from '../models/project'; 
import './viewProjects.css';


export class ViewProjects extends React.Component {

    state = {
        projects: []
    }

    repo = new Repository(); 
    
    addProject(project) {
        var projects = this.state.projects; 
        projects.push(project); 
        this.setState( { projects }); 
    }

    // addClient(projectClient) {
    //     var projectClients = this.state.projectClients; 
    //     projectClients.push(projectClient); 
    //     this.setState( { projectClients }); 
    // }

    componentDidMount(){
        this.repo.getProjects().then(data => (
            data.map(x => {
                this.addProject(new Project(x.job_id, x.ContractorID, x.ClientID, x.firstName, x.lastName, x.phoneNumber, x.userEmail, x.Status, x.ProjectName, x.Description, x.Deadline))
            })
        )); 
    }

    // getClientInfo(id)
    // {
    //     let info = { 
    //         firstName: "",
    //         lastName: "",
    //         phone: ""
    //     }

    //     this.repo.getUserInfo(id).then(data => {
    //        info.firstName = data.firstName; 
    //     }
    //     ); 
    //     return info; 
    // }


    render() { 

        return <>  
            <div class = "container">
                <h1 class = 'display-1'> Discover new Projects </h1> 
                <div class = "row">
                    {
                    this.state.projects.map((x,i) => 
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
                                            <p class = ".text-muted"> Contact: {x.ClientFirstName} {x.ClientLastName} {x.ClientEmail} {x.ClientPhoneNumber}</p> 
                                            <p> </p>
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
