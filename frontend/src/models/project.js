export class Project {
    constructor(job_id, ContractorID, ClientID, ClientFirstName, ClientLastName, ClientPhoneNumber, ClientEmail, ClientZipCode, Status, ProjectName, ProjectDescription, Deadline, PostedDate ) {
        this.job_id = job_id; 
        this.ContractorID = ContractorID; 
        this.ClientID = ClientID; 
        this.ClientFirstName = ClientFirstName; 
        this.ClientLastName = ClientLastName; 
        this.ClientPhoneNumber = ClientPhoneNumber; 
        this.ClientEmail = ClientEmail;
        this.ClientZipCode = ClientZipCode; 
        this.Status = Status; 
        this.ProjectName = ProjectName; 
        this.ProjectDescription = ProjectDescription; 
        this.Deadline = Deadline; 
        this.PostedDate = PostedDate; 
    }
}
