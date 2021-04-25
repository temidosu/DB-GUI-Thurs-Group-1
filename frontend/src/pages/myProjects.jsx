import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Project } from '../models/project'; 

export class MyProjects extends React.Component {

    repo = new Repository(); 
    state = {
        projects: [], 
        loggedIn: false
    }

    addProject(project){
        var projects = this.state.projects; 
        projects.push(project);
        this.setState({ projects }); 
    }
 

   //job_id, ContractorID, ClientID, ClientFirstName, ClientLastName, ClientPhoneNumber, ClientEmail, Status, ProjectName, ProjectDescription, Deadline
    componentDidMount()
    {
        this.repo.getProjectsByClient(localStorage.getItem("userID")).then(
            data => (
                data.map(x => {
                    this.addProject(new Project(x.job_id, x.ContractorID, x.ClientID, x.firstName, x.lastName, x.phoneNumber, x.userEmail, x.ZipCode, x.Status, x.ProjectName, x.Description, x.Deadline))
                })
        ));
    }

    render() 
    {
        if(!localStorage.getItem("userID") || localStorage.getItem("userID") == "null")
        {
            return <Redirect to = "/login"></Redirect> 
        }
        return <>
            <div class = "container mt-2">
                <br></br>
                <br></br>
                <h1 class = 'display-4  text-center'> My Projects </h1>
                <br></br>
            </div> 
            <div class = "container">
            <div class = "card m-0 p-0 border-0">
                <div class = "card-body">
                    <div class = "row">
                        <div class = "col-3"></div>
                        <div class = "col-5 m-0 p-1">
                            <input class="form-control" type="search" placeholder="Search Projects" aria-label="Search"></input>
                        </div>
                        <div class = "col-2 m-0 p-1">
                            <button class="btn btn-primary my-2 my-sm-0 ml-0" type="submit">Search</button>
                        </div>
                        <div class = "col-2"></div>
                    </div>
                    <br></br>
                    <div class = "row"> 
                        <div class = "col-5">
                        </div>
                        <div class = "col-2 m-0 p-0">
                            <button class="btn btn-success" type="button">Create New Project</button>
                        </div>
                    </div>
                </div>
            </div>
                <br></br>
                <br></br>
            </div>
            <div class = "container">
                {
                    this.state.projects.map((x) =>
                    <div class = "row">
                        <div class = "card w-100 m-2 border-0"> 
                            <div class = "card-body">
                                <h2>{ x.ProjectName }</h2> 
                            </div>
                        </div>
                    </div> 
                    )
                }
            </div>
        </>
    }
}
