import React from 'react'; 
import { Repository } from '../api/repository';

export class ProjectButton extends React.Component{
    
    repo = new Repository(); 

    state = {
        ContractorID: localStorage.getItem("contractorID"),
        ClientID: localStorage.getItem("userID"),
        Status: "Pending",
        ProjectName: "",
        ProjectDescription: "",
        Deadline: "",
    }

    createProject()
    {
        let json = { 
            ContractorID: this.state.ContractorID, 
            ClientID: this.state.ClientID, 
            Status: this.state.Status,
            ProjectName: this.state.ProjectName, 
            Description: this.state.ProjectDescription, 
            Deadline: this.state.Deadline, 
        }
        console.log(json);
        this.repo.createProject(json);
    }

    render()
    {
        return(
        <>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#projectModal">Create a New Project</button>
        <div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="projectModalLabel">Submit a Project Request</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div class="modal-body">
                    <form className = "container"> 
                        <div className = "row"> 
                            <div className = "col"> 
                                <label htmlFor="ProjectName">Project Name</label> 
                                    <input type = "text"
                                        id = "ProjectName"
                                        name = "ProjectName"
                                        value = {this.state.ProjectName}
                                        onChange = {e => this.setState({ProjectName: e.target.value})}
                                        className = "form-control" />
                            </div>
                        </div> 
                        <div class = "row">
                            <div className = "col"> 
                                <label htmlFor="ProjectDescription">Project Description</label> 
                                    <textarea
                                        id = "ProjectDescription"
                                        name = "ProjectDescription"
                                        rows = "4"
                                        value = {this.state.ProjectDescription}
                                        onChange = {e => this.setState({ProjectDescription: e.target.value})}
                                        className = "form-control"></textarea>
                            </div>
                        </div>
                        <div className = "row"> 
                            <div className = "col"> 
                                <label htmlFor="Deadline">Deadline</label> 
                                    <input type = "date"
                                        id = "Deadline"
                                        name = "Deadline"
                                        value = {this.state.Deadline}
                                        onChange = {e => this.setState({Deadline: e.target.value})}
                                        className = "form-control" />
                            </div>
                        </div>
                    </form> 
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={ () => this.createProject()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
}