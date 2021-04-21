import React from 'react'; 
import axios from 'axios';

export class Login extends React.Component {
    
    state = { 
        userName: "", 
        password: "", 
        loggedIn
    };

    errors = () => {
        if(this.state.userName = "")
            return "This field cannot be empty" 
        if(this.state.password = "")
            return "This field cannot be empty"
        return ""; 
    }

    login() {
        //check against stored usernames and passwords 
           
    }

    render() {
        return <>
            <div class = "card w-25 mx-auto mt-5 p-3 pb-5"> 
                <h2 class="font-weight-bold"> Login </h2> 
                <p class="text-muted">Login to an existing account </p> 
                <hr></hr> 
                <form className = "container"> 
                    <div className = "row"> 
                        <div className = "col">
                            <label htmlFor="name"> Username </label> 
                                <input text = "text"
                                    id = "name"
                                    name = "name"
                                    value = {this.state.userName}
                                    onChange = {e => this.setState({ userName: e.target.value})}
                                    className = "form-control" />
                        </div>
                    </div> 
                    <div className = "row"> 
                        <div className = "col"> 
                            <label htmlFor="name"> Password  </label> 
                                <input text = "text"
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
                                onClick={ () => this.login() }>
                                Login
                            </button>
                            </div>
                    </div>

                </form> 
            </div> 
        </>
    }

}