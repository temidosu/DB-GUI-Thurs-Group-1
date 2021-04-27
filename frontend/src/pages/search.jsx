import React from 'react'; 
import { Repository } from '../api/repository';
import { Workers } from './workers.jsx'; 
import { Worker } from '../models/worker'; 
import { Contractors } from './contractors.jsx'; 
import { Contractor } from '../models/contractor'; 
import { Projects } from './Projects.jsx'; 
import { Project } from '../models/project'; 
import './search.css'; 

export class Search extends React.Component{

    repo = new Repository(); 

    state = {
        roleId: localStorage.getItem("roleID"), 
        searchFor: "",
        zipCode: "",
        searchQuery: "", 
        //searchTerms: [],  
        workers: [],
        contractors: [],
        projects: []
    }

    addWorker(worker) {
        var workers = this.state.workers; 
        workers.push(worker); 
        this.setState( { workers }); 
    }

    addContractor(contractor) {
        var contractors = this.state.contractors; 
        contractors.push(contractor); 
        this.setState( { contractors });
    }

    addProject(project) {
        var projects = this.state.projects; 
        projects.push(project); 
        this.setState( { projects });
    }

    // handleSearchQuery() {
    //     var searchTerms = this.state.searchQuery.split(" "); 
    //     this.setState({searchTerms}); 
    //     console.log(searchTerms); 
    // }

    // componentDidMount()
    // {
    //     if(props.params.location.state)
    //     {
    //         this.setState(props.params.location.state); 
    //     }
    // }

    search() {
        console.log(this.state.searchQuery); 
        // if(this.state.searchQuery != "")
        // {
        //     this.handleSearchQuery(); 
        // }
        //console.log(this.state.searchFor);  
        this.setState( {contractors: [], workers: [], projects: []})
        console.log("zipcode", this.state.zipCode); 
        if(this.state.searchFor == "workers")
        {
            if(this.state.zipCode == "" && this.state.searchQuery == "")
            {
                this.repo.getWorkers().then(data => (
                data.map(x => {
                    this.addWorker(new Worker(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                })
            )); 
            }
            else if(this.state.searchQuery == "")
            {
                console.log("getWorkersByZip", this.state.zipCode)
                this.repo.getWorkersByZip(this.state.zipCode).then(data => (
                    //console.log(data), 
                    data.map(x => {
                        this.addWorker(new Worker(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
                //this.setState( {zipCode: ""}); 
            }
            else if (this.state.zipCode == "")
            {
                //console.log("here"); 
                //console.log(this.state.searchQuery); 
                this.repo.getWorkersByQuery(this.state.searchQuery).then(data => (
                    //console.log(data),
                    data.map(x => {
                        this.addWorker(new Worker(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
            }
            else 
            {
                this.repo.getWorkersByZipAndQuery(this.state.zipCode, this.state.searchQuery).then(data => (
                    //console.log(data),
                    data.map(x => {
                        this.addWorker(new Worker(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
            }
        }
        if(this.state.searchFor == "contractors")
        {
            // this.repo.getContractors().then(data => (
            //     data.map(x => {
            //         this.addContractor(new Contractor(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
            //     })
            // )); 
            if(this.state.zipCode == "" && this.state.searchQuery == "")
            {
                this.repo.getContractors().then(data => (
                data.map(x => {
                    this.addContractor(new Contractor(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                })
            )); 
            }
            else if(this.state.searchQuery == "")
            {
                this.repo.getContractorsByZip(this.state.zipCode).then(data => (
                    //console.log(data), 
                    data.map(x => {
                        this.addContractor(new Contractor(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
                //this.setState( {zipCode: ""}); 
            }
            else if (this.state.zipCode == "")
            {
                //console.log("here"); 
                //console.log(this.state.searchQuery); 
                this.repo.getContractorsByQuery(this.state.searchQuery).then(data => (
                    //console.log(data),
                    data.map(x => {
                        this.addContractor(new Contractor(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
            }
            else 
            {
                this.repo.getContractorsByZipAndQuery(this.state.zipCode, this.state.searchQuery).then(data => (
                    //console.log(data),
                    data.map(x => {
                        this.addContractor(new Contractor(x.user_id, x.ZipCode, x.userName, x.userEmail, x.firstName, x.lastName, x.phoneNumber))
                    })
                )); 
            }
        }
        if(this.state.searchFor == "projects")
        {
            this.repo.getProjects().then(data => (
                data.map(x => {
                    this.addProject(new Project(x.job_id, x.ContractorID, x.ClientID, x.ClientFirstName, x.ClientLastName, x.ClientPhoneNumber, x.ClientEmail, x.ClientZipCode, x.Status, x.ProjectName, x.ProjectDescription, x.Deadline))
                })
            )); 
        }
        //window.history.replaceState({ key: history.location.key, state: this.state})
    }

    render() 
    {
        if(this.state.roleId == 1)
        {
            return <>
            <div class = "container m-3 mx-auto">
            <br></br>
            <div class = "row">
                <div class = "col-2"></div>
                <div class = "col-5 m-0 p-0">
                <input class="form-control" 
                    type="text" 
                    placeholder="I'm looking for..." 
                    onChange = { e => this.setState({ searchQuery: e.target.value })}
                    ></input>
                 </div>
                 <div class = "col-1.5 m-0 p-0">
                 <select id="searchFor"
                                name="searchFor"
                                className="form-control"
                                value={this.state.searchFor}
                                onChange={ e => this.setState({ searchFor: e.target.value }) }>
                                <option></option>
                                {
                                    ["workers", "contractors"].map(x => <option key={ x.index } value={ x }>{ x }</option>)
                                }
                 </select>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <input class="form-control" 
                  type="text" 
                  placeholder="ZipCode" 
                  aria-label="ZipCode"
                  onChange = { e => this.setState({ zipCode: e.target.value })}
                  ></input>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <button class="btn btn-success my-2 my-sm-0 ml-0" 
                 type="submit" 
                 onClick={ () => this.search()}>
                     Search
                 </button> 
                 </div>
            </div>
            <br></br>
            <hr></hr>
            <Workers workers = {this.state.workers}/>
            <Contractors contractors = {this.state.contractors}/>
            </div>
            </>
        }
        else if(this.state.roleId == 2)
        {
            return <>
            <div class = "container m-3 mx-auto">
            <br></br>
            <div class = "row">
                 <div class = "col-2"></div>
                 <div class = "col-5 m-0 p-0">
                 <input class="form-control" 
                    type="text" 
                    placeholder="I'm looking for..." 
                    onChange = { e => this.setState({ searchQuery: e.target.value })}
                 >
                 </input>
                 </div>
                 <div class = "col-1.5 m-0 p-0">
                 <select id="searchFor"
                                name="searchFor"
                                className="form-control"
                                value={this.state.searchFor}
                                onChange={ e => this.setState({ searchFor: e.target.value }) }>
                                <option></option>
                                {
                                    ["projects", "contractors"].map(x => <option key={ x.index } value={ x }>{ x }</option>)
                                }
                 </select>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <input class="form-control" 
                  type="text" 
                  placeholder="ZipCode" 
                  aria-label="ZipCode"
                  onChange = { e => this.setState({ zipCode: e.target.value })}
                  ></input>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <button class="btn btn-outline-success my-2 my-sm-0 ml-0" 
                 type="submit" 
                 onClick={ () => this.search()}>
                     Search
                 </button> 
                 </div>
            </div>
            <br></br>
            <hr></hr>
            <Contractors contractors = {this.state.contractors}/>
            <Projects projects = {this.state.projects}/>
            </div>
            </>
        }
        else if(this.state.roleId == 3)
        {
            return <>
            <div class = "container m-3 mx-auto">
            <br></br>
            <div class = "row">
                 <div class = "col-2"></div>
                 <div class = "col-5 m-0 p-0">
                 <input class="form-control" 
                    type="text" 
                    placeholder="I'm looking for..." 
                    onChange = { e => this.setState({ searchQuery: e.target.value })}
                 >
                 </input>
                 </div>
                 <div class = "col-1.5 m-0 p-0">
                 <select id="searchFor"
                                name="searchFor"
                                className="form-control"
                                value={this.state.searchFor}
                                onChange={ e => this.setState({ searchFor: e.target.value }) }>
                                <option></option>
                                {
                                    ["projects", "workers"].map(x => <option key={ x.index } value={ x }>{ x }</option>)
                                }
                 </select>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <input class="form-control" 
                  type="text" 
                  placeholder="ZipCode" 
                  aria-label="ZipCode"
                  onChange = { e => this.setState({ zipCode: e.target.value })}
                  ></input>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <button class="btn btn-outline-success my-2 my-sm-0 ml-0" 
                 type="submit" 
                 onClick={ () => this.search()}>
                     Search
                 </button> 
                 </div>
            </div>
            <br></br>
            <hr></hr>
            <Workers workers = {this.state.workers}/>
            <Projects projects = {this.state.projects}/>
            </div>
            </>
        }
        else 
        {
            return <></>
        }
    }
}