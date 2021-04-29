import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Project } from '../models/project';
import { ProjectButton } from '../buttons/projectButton';  

//const months = [January, February, March, April, May, June, July, August, September, October, November, December];  

export class ProjectRequests extends React.Component {

    repo = new Repository(); 

    state = {
        projects: []
    }

    addProject(project){
        var projects = this.state.projects; 
        projects.push(project);
        this.setState({ projects }); 
        console.log("projects", this.state.projects); 
    }

    // this.job_id = job_id; 
    //     this.ContractorID = ContractorID; 
    //     this.ClientID = ClientID; 
    //     this.ClientFirstName = ClientFirstName; 
    //     this.ClientLastName = ClientLastName; 
    //     this.ClientPhoneNumber = ClientPhoneNumber; 
    //     this.ClientEmail = ClientEmail;
    //     this.ClientZipCode = ClientZipCode; 
    //     this.Status = Status; 
    //     this.ProjectName = ProjectName; 
    //     this.ProjectDescription = ProjectDescription; 
    //     this.Deadline = Deadline; 

    componentDidMount()
    {
        this.repo.getProjectsByContractor(localStorage.getItem("userID")).then(
            data => (
                data.map(x => {
                    console.log(x); 
                    this.addProject(new Project(x.job_id, x.ContractorID, x.ClientID, x.firstName, x.lastName, x.phoneNumber, x.userEmail, x.ZipCode, x.Status, x.ProjectName, x.Description, x.Deadline, x.PostedDate))
                })
        )) 
    }

    // remove(index) {
    //     var projects = this.state.projects;
    //     projects.splice(index, 1);
    //     this.setState({projects});
    // }

    decline(id, i)
    {
        this.repo.declineProject(id); 
        var projects = this.state.projects;
        projects.splice(i, 1);
        this.setState({projects});
    }

    accept(id, i)
    {
        this.repo.acceptProject(id); 
        var projects = this.state.projects;
        projects.splice(i, 1);
        this.setState({projects});
    }
    render() 
    {
        if(!(localStorage.getItem("userID") || localStorage.getItem("userID") == "null"))
        {
            return <Redirect to = "/login"></Redirect> 
        }
        if(localStorage.getItem("roleID") == 1)
        {
            return <Redirect to = "/"></Redirect> 
        }
        return <>
            <div class = "container mt-2">
                <br></br>
                <h1 class = 'display-4  text-center'> Project Requests </h1>
                <br></br>
            </div>

            <table className="table table-condensed table-striped">
                <thead className = "table-dark">
                    <tr>
                        <th width = "10%">Client</th>
                        <th width = "12%">Project Name</th>
                        <th width = "44%">Project Description</th>
                        <th width = "10%">PostDate</th> 
                        <th width = "10%">Deadline</th>
                        <th width = "7%">Accept</th>
                        <th width = "7%">Decline</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.projects.map((x,i) =>
                    <tr key = {i}>
                        {x.Status == "Pending" &&
                        <>
                        <td><Link to = {`/user/${x.ClientID}`}>{x.ClientFirstName} {x.ClientLastName}</Link></td>
                        <td>{x.ProjectName}</td>
                        <td>{x.ProjectDescription}</td>
                        <td>{x.PostedDate.substring(0,10)}</td>
                        <td>{x.Deadline.substring(0,10)}</td>
                        <td><button type="button" class="btn btn-success" onClick={() => this.accept(x.job_id, i)}>✔</button></td>
                        <td><button type="button" class="btn btn-danger" onClick={() => this.decline(x.job_id, i)}>✘</button></td>
                        </>
                        }
                    </tr>
                    )
                }
                </tbody>
            </table>
            {this.state.projects.length == 0 && <p class = "text-muted text-center mt-5"> You have no project requests. </p>}
        </>
    }
}