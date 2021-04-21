import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';

export class Login extends React.Component {
    repo = new Repository(); 

    render() {
        return <>
            <p>Login Page</p>  
        </>
    }

    
}