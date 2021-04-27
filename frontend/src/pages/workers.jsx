import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Worker } from '../models/worker'; 
import './workers.css';
//import { OthersProfile } from './othersProfile'; 

export const Workers = props => <> 
    <div class = "container mt-2 results">
        <div class = "row">
           {
           props.workers.map((x) =>
                <div class = "col-4">
                    <div class = "card border w-100 m-2"> 
                        <div class = "card-body">
                            <h2> {x.firstName} {x.lastName} </h2>
                            <p class = "text-muted"> {x.ZipCode} </p>
                            <Link to = {`/user/${x.user_id}`} class = "stretched-link"></Link>
                            {/* <Link to = "/user/:userid">{x.firstName}</Link> */}
                        </div>
                    </div>
                </div> 
            )
           }
        </div>
    </div>
</>;
