import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';

export class Logout extends React.Component {

    render() 
    {
        localStorage.clear(); 
        return <>
            <Redirect to = "/"> </Redirect> 
        </>;
    }
}