export class Project {
    constructor(job_id, ContractorID, ClientID, ClientFirstName, ClientLastName, ClientPhoneNumber, ClientEmail, Status, ProjectName, ProjectDescription, Deadline ) {
        this.job_id = job_id; 
        this.ContractorID = ContractorID; 
        this.ClientID = ClientID; 
        this.Status = Status; 
        this.ProjectName = ProjectName; 
        this.ProjectDescription = ProjectDescription; 
        this.Deadline = Deadline; 
        this.ClientFirstName = ClientFirstName; 
        this.ClientLastName = ClientLastName; 
        this.ClientPhoneNumber = ClientPhoneNumber; 
        this.ClientEmail = ClientEmail; 
    }
}