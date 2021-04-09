import React from 'react'; 
import axios from 'axios';

export class Signup extends React.Component {
    
    state = { 
        firstName: "", 
        lastName: "", 
        userName: "", 
        email: "",
        password: "", 
        confirmPassword: "", 
    };

    errors = () => {
        if(this.state.firstName = "")
            return "This field cannot be empty"
        if(this.state.lastName = "")
            return "This field cannot be empty"
        if(this.state.userName = "")
            return "This field cannot be empty"
        //make a username must be unique thing 
        if(this.state.email = "")
            return "This field cannot be empty"
        //make a email must be unique thing 
        if(this.state.password.length < 8 || this.state.password.length > 20)
            return "Password must be between 8 and 20 characters"
        if(this.state.password != this.state.confirmPassword)
            return "Passwords do not match"
        return ""; 
    }

    onAddClick() {
        //api calls 
        this.setState({
            firstName: '',
            lastName: '', 
            userName: '',
            email: '', 
            password: '',
            role: ''
        });   
    }

    render() {
        return <>
            <div class = "card w-25 mx-auto mt-5 p-3 pb-5"> 
                <h2 class="font-weight-bold"> Signup </h2> 
                <p class="text-muted">Fill out this form to create an account </p> 
                <hr></hr> 
                <form className = "container"> 
                    <div className = "row"> 
                    <div className = "col">
                        <label htmlFor="firstName"> First Name </label> 
                                <input text = "text"
                                    id = "firstName"
                                    name = "firstName"
                                    value = {this.state.firstName}
                                    onChange = { e => this.setState({ firstName: e.target.value })}
                                    className = "form-control" />
                    </div> 
                    <div className = "col">
                        <label htmlFor="lastName"> Last Name </label> 
                                <input text = "text"
                                    id = "lastName"
                                    name = "lastName"
                                    value = {this.state.lastName}
                                    onChange = { e => this.setState({ lastName: e.target.value })}
                                    className = "form-control" />
                    </div> 
                    </div>
                    <div className = "row"> 
                        <div className = "col">
                        <label htmlFor="name"> Username </label> 
                                <input text = "text"
                                    id = "name"
                                    name = "name"
                                    value = {this.state.userName}
                                    onChange = { e => this.setState({ userName: e.target.value })}
                                    className = "form-control" />
                        </div>
                    </div> 
                    <div className = "row"> 
                        <div className = "col"> 
                        <label htmlFor="name"> Email  </label> 
                                <input text = "text"
                                    id = "name"
                                    name = "name"
                                    value = {this.state.email}
                                    onChange = { e => this.setState({ email: e.target.value })}
                                    className = "form-control" />
                        </div> 
                    </div> 
                    <div className = "row"> 
                        <div className = "col"> 
                        <label htmlFor="name"> Password </label> 
                                <input text = "text"
                                    id = "name"
                                    name = "name"
                                    value = {this.state.email}
                                    onChange = { e => this.setState({ password: e.target.value })}
                                    className = "form-control" />
                        </div> 
                    </div> 
                    <div className = "row"> 
                        <div className = "col"> 
                        <label htmlFor="name"> Confirm Password </label> 
                                <input text = "text"
                                    id = "name"
                                    name = "name"
                                    value = {this.state.email}
                                    onChange = { e => this.setState({ confirmPassword: e.target.value })}
                                    className = "form-control" />
                        </div> 
                    </div> 
                    <div className = "row"> 
                        <div className = "col">
                        <label htmlFor="role"> Role </label> 
                            <select id="role"
                                    name="role"
                                    className="form-control"
                                    value={this.state.role}
                                    onChange={ event => this.setState({ role: event.target.value }) }>
                                    <option></option>
                                    {
                                        ["client", "contractor", "worker"].map(x => <option key={ x.index } value={ x }>{ x }</option>)
                                    }
                                    </select>
                        </div>
                    </div>
                    <div class = "row"> 
                            <div class = "col">
                            <br></br>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={ () => this.onAddClick() }>
                                Sign Up
                            </button>
                            </div>
                    </div>

                </form> 
            </div> 
        </>
    }

}