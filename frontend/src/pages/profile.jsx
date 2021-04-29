import React from 'react';
import { ReviewList } from './ReviewList'; 
import "./profile.css";
import { Repository } from '../api/repository';

export class Profile extends React.Component{

    repo = new Repository(); 

    state = {
        firstName: "", 
        lastName: "", 
        userName: "", 
        email: "", 
        phone: "", 
        zipCode: ""
    }

    displayPhone() {
        var phoneNum = "("; 
        phoneNum += this.state.phone.toString().substring(0,3); 
        phoneNum += ")"; 
        phoneNum += this.state.phone.toString().substring(3,6); 
        phoneNum += "-"; 
        phoneNum += this.state.phone.toString().substring(6,this.state.phone.length); 
        return phoneNum; 
    }

    componentDidMount()
    {
        this.repo.getUserInfo(localStorage.getItem("userID")).then(
            data=>{
                this.setState({firstName: data[0].firstName, lastName: data[0].lastName, userName: data[0].userName, 
                    email: data[0].userEmail, phone: data[0].phoneNumber, zipCode: data[0].ZipCode})
            }
        )
    }

    render()
    {
        return(
        <div className="constraint mx-auto">
            <div className="mb-5">
                <br></br>
                <br></br>
                <h1 class = "display-4">Profile</h1>
                <br></br>
                <div className = "card">
                    <div className = "card-header bg-card-header">
                        <span className="h1 text-light">Account Info</span>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                       <p> First: {this.state.firstName} </p> 
                    </li>
                    <li className="list-group-item">
                       <p> Last: {this.state.lastName} </p> 
                    </li>
                    <li className="list-group-item">
                       <p> Username: {this.state.userName} </p> 
                    </li>
                    <li className="list-group-item">
                       <p> Phone: {this.displayPhone(this.state.phone)} </p> 
                    </li>
                    <li className="list-group-item">
                       <p> Email: {this.state.email} </p> 
                    </li>
                    <li className="list-group-item">
                       <p> ZipCode: {this.state.zipCode} </p> 
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}
