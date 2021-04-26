import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';


export class OthersProfile extends React.Component {

    repo = new Repository(); 

    state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "", 
      userName: "",  
      zipCode: ""
    }

    componentDidMount () {
      if(this.props.match.params.userid)
      {
          this.repo.getUserInfo(this.props.match.params.userid).then(
          data => {
              console.log(data); 
              this.setState( {firstName: data[0].firstName, lastName: data[0].lastName, email: data[0].userEmail,
               phone: data[0].phoneNumber, role: data[0].role_id, userName: data[0].userName, zipCode: data[0].zipCode})
          }
          );
      }
    }

    getRole(role) {
        if(role == 1)
        {
            return "Client"
        }
        if(role == 2)
        {
            return "Worker"
        }
        if(role == 3)
        {
            return "Contractor"
        }
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

    render() 
    {
        if(this.state.role == 1)
        {
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>{this.getRole(this.state.role)}</h4>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <p> {this.state.firstName} {this.state.lastName} {this.state.email} {this.displayPhone()} </p> 
                    </div>
                </div> 
            </div> 
        )
        }
        if(this.state.role == 2)
        {
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>{this.getRole(this.state.role)}</h4>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <p> {this.state.firstName} {this.state.lastName} {this.state.email} {this.displayPhone()} </p> 
                    </div>
                </div> 
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>Reviews</h4>
                    </div>
                    <div class = "card-body"> 
                    </div>
                </div> 
            </div> 
        )
        }
        if(this.state.role == 3)
        {
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>{this.getRole(this.state.role)}</h4>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <p> {this.state.firstName} {this.state.lastName} {this.state.email} {this.displayPhone()} </p> 
                    </div>
                </div> 
            </div> 
        )
        }
        return <>
        </>;
        // if(this.state.role == "")
        // return <>
        //     <div class = "container text-center">
        //         <div class = "card border-0">
        //             <div class = "card-body">
        //                 <img src = "https://staysafe.org/wp-content/uploads/2017/12/Safety-Hazards-Signs-for-Seniors-1.jpg" class = "img-fluid h-30 w-30"/> 
        //                 <h1 class = "display-5">User not found.</h1>
        //             </div> 
        //         </div>
        //     </div>
        // </>;
    }
}