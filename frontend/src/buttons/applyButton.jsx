import React from 'react'; 

export class ApplyButton extends React.Component{

    state = {
        job_id: "",
        ContractorID: "",
        ClientID: localStorage.getItem("userID"),
        ClientFirstName: "",
        ClientLastName: "",
        ClientPhoneNumber: "",
        ClientEmail: "",
        ClientZipCode: "",
        Status: "",
        ProjectName: "",
        ProjectDescription: "",
        Deadline: "",
    }

    render()
    {
        return(
        <>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#projectModal">Apply</button>
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
                                <label htmlFor="ClientFirstName">First Name</label> 
                                    <input type = "text"
                                        id = "ClientFirstName"
                                        name = "ClientFirstName"
                                        value = {this.state.ClientFirstName}
                                        onChange = {e => this.setState({ClientFirstName: e.target.value})}
                                        className = "form-control" />
                            </div>
                            <div className = "col">
                                <label htmlFor="ClientLastName">Last Name</label> 
                                    <input type = "text"
                                        id = "ClientLastName"
                                        name = "ClientLastName"
                                        value = {this.state.ClientLastName}
                                        onChange = {e => this.setState({ClientLastName: e.target.value})}
                                        className = "form-control" />
                            </div>
                            <div className = "col">
                                            <label htmlFor="ClientEmail">Email</label> 
                                    <input type = "text"
                                        id = "ClientEmail"
                                        name = "ClientEmail"
                                        value = {this.state.ClientEmail}
                                        onChange = {e => this.setState({ClientEmail: e.target.value})}
                                        className = "form-control" />
                            </div>
                        </div> 
                        <div className = "row"> 
                            <div className = "col"> 
                                <label htmlFor="ClientPhoneNumber">Phone Number</label> 
                                    <input type = "text"
                                        id = "ClientPhoneNumber"
                                        name = "ClientPhoneNumber"
                                        value = {this.state.ClientPhoneNumber}
                                        onChange = { e => this.setState({ClientPhoneNumber: e.target.value})}
                                        className = "form-control" />
                            </div>
                            <div className = "col"> 
                                <label htmlFor="ClientZipCode">Zip Code</label> 
                                    <input type = "text"
                                        id = "ClientZipCode"
                                        name = "ClientZipCode"
                                        value = {this.state.ClientZipCode}
                                        onChange = { e => this.setState({ClientZipCode: e.target.value})}
                                        className = "form-control" />
                            </div>  
                        </div> 
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
                                        type = "month"
                                        value = {this.state.Deadline}
                                        onChange = {e => this.setState({Deadline: e.target.value})}
                                        className = "form-control" />
                            </div>
                        </div>
                    </form> 
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success" onClick={ () => this.onSubmitClick()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
}
