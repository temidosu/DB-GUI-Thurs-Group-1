import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';

export class Login extends React.Component {

    repo = new Repository(); 
    
    state = { 
        email: "", 
        password: "", 
        loggedIn: false,
        userID: "", 
        errors: false
    };

    checkErrors = () => {
        if(this.state.email = "")
            return "This field cannot be empty" 
        if(this.state.password = "")
            return "This field cannot be empty"
        return ""; 
    }

    login() {
        let json = {
            email: this.state.email,
            password: this.state.password  
        }
        this.repo.login(json).then(data => {
            console.log("resp21321onse.response", data);
    
            //If login was successful
            if (data) {
                console.log("Login was successful")
                console.log("userID:", data)
                this.setState({loggedIn: true, userID: data})
            }
            else {
                console.log("Login failed")
                this.setState({error: true, loggedIn: false})
            }

            localStorage.setItem("userID", data.user_id);
            localStorage.setItem("roleID", data.role_id); 
            localStorage.setItem("firstName", data.firstName); 
            localStorage.setItem("lastName", data.lastName); 
        });
        
        //check if login failed
    }

    render() {
        if(this.state.loggedIn)
        {
            return <Redirect to = "/dashboard"> </Redirect>
        }
        return <>
        <div class = "card w-25 mx-auto mt-5 p-3 pb-5"> 
            <h2 class="font-weight-bold"> Login </h2> 
            <p class="text-muted">Login to an existing account </p> 
            <hr></hr> 
            <form className = "container"> 
                <div className = "row"> 
                    <div className = "col">
                        <label htmlFor="name"> Email </label> 
                            <input type = "text"
                                id = "name"
                                name = "name"
                                value = {this.state.email}
                                onChange = {e => this.setState({ email: e.target.value})}
                                className = "form-control" />
                    </div>
                </div> 
                <div className = "row"> 
                    <div className = "col"> 
                        <label htmlFor="name"> Password  </label> 
                            <input type = "password"
                                id = "name"
                                name = "name"
                                value = {this.state.password}
                                onChange = { e => this.setState({password: e.target.value})}
                                className = "form-control" />
                    </div> 
                </div> 
                <div class = "row"> 
                        <div class = "col">
                        <br></br>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ () => this.login()}>
                            Login
                        </button>
                        </div>
                </div>

            </form> 
        </div> 
        </>;
    }

}