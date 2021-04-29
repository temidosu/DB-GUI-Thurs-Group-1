import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Project } from '../models/project';
import { ProjectButton } from '../buttons/projectButton';  

//const months = [January, February, March, April, May, June, July, August, September, October, November, December];  

export class MyProjects extends React.Component {

    repo = new Repository(); 
    state = {
        projects: [], 
        loggedIn: false, 
    }

    addProject(project){
        var projects = this.state.projects; 
        projects.push(project);
        this.setState({ projects }); 
    }
 
    statusColor(status){
        if(status == "Pending")
        {
            return "text-warning"; 
        } 
        if(status == "Complete")
        {
            return "text-info"; 
        }
        if(status == "In Progress")
        {
            return "text-success"; 
        }
        if(status == "Denied")
        {
            return "text-danger"; 
        }
    }

    // getContractorInfo(contractorID)
    // {
    //     let contractor = { 
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         phone: "",
    //         zipCode: ""
    //     }
    //     this.repo.getUserInfo(contractorID).then(data => (
    //         console.log(data), 
    //         contractor.firstName = data.firstName,
    //         contractor.lastName = data.lastName,
    //         contractor.email = data.userEmail,
    //         contractor.phone = data.phoneNumber, 
    //         contractor.zipCode = data.ZipCode
    //     ))
    //     console.log(contractor); 
    //     return contractor; 
    // }

    // deadlinePassed(deadline)
    // {
    //     if(deadline > Date.now())
    //     {
    //         return "<h2 class = 'text-danger'> Deadline has passed </h2>"
    //     }
    //     else 
    //     {
    //         return "";
    //     }  
    // }

    // deadline(deadline){
    //     var year = deadline.substr(0,4); 
    //     //var month = months[deadline.substr()] 
    // }

    // this.job_id = job_id; 
    // this.ContractorID = ContractorID; 
    // this.ClientID = ClientID; 
    // this.ClientFirstName = ClientFirstName; 
    // this.ClientLastName = ClientLastName; 
    // this.ClientPhoneNumber = ClientPhoneNumber; 
    // this.ClientEmail = ClientEmail;
    // this.ClientZipCode = ClientZipCode; 
    // this.Status = Status; 
    // this.ProjectName = ProjectName; 
    // this.ProjectDescription = ProjectDescription; 
    // this.Deadline = Deadline; 

    componentDidMount()
    {
        this.repo.getProjectsByClient(localStorage.getItem("userID")).then(
            data => (
                data.map(x => {
                    console.log(x); 
                    this.addProject(new Project(x.job_id, x.ContractorID, x.ClientID, x.firstName, x.lastName, x.phoneNumber, x.userEmail, x.ZipCode, x.Status, x.ProjectName, x.Description, x.Deadline, x.PostedDate))
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
            <table className="table table-condensed table-striped">
                <thead className = "table-dark">
                    <tr>
                        <th width = "10%">Contractor</th>
                        <th width = "12%">Project Name</th>
                        <th width = "44%">Project Description</th>
                        <th width = "10%">PostDate</th> 
                        <th width = "10%">Deadline</th>
                        <th width = "14%">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.projects.map((x,i) =>
                    <tr key = {i}>
                        <>
                        <td><Link to = {`/user/${x.ContractorID}`}>{x.ClientFirstName} {x.ClientLastName}</Link></td>
                        <td>{x.ProjectName}</td>
                        <td>{x.ProjectDescription}</td>
                        <td>{x.PostedDate.substring(0,10)}</td>
                        <td>{x.Deadline.substring(0,10)}</td>
                        <td><span class = {this.statusColor(x.Status)}> { x.Status } </span> </td>
                        </>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </>
    }
}