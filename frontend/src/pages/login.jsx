import React from 'react'; 
import axios from 'axios';

export class Login extends React.Component {
    
    state = { 
        userName: "", 
        password: "", 
        
    };

    errors = () => {
        if(this.state.userName = "")
            return "This field cannot be empty" 
        if(this.state.email = "")
            return "This field cannot be empty"
        if(this.state.password.length < 8 || this.state.password.length > 20)
            return "Password must be between 8 and 20 characters"
        return ""; 
    }

    onAddClick() {
        //api calls 
        this.setState({
            userName: '', 
            password: '',
        });   
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
                                    onChange = { e => this.setState({ userName: e.target.value })}
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
                                    onChange = { e => this.setState({ password: e.target.value })}
                                    className = "form-control" />
                        </div> 
                    </div> 
                    <div class = "row"> 
                            <div class = "col">
                            <br></br>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={ () => this.onAddClick() }>
                                Login
                            </button>
                            </div>
                    </div>

                </form> 
            </div> 
        </>
    }

}