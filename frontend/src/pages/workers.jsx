import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Worker } from '../models/worker'; 
//import { OthersProfile } from './othersProfile'; 


export const Workers = props => <> 
    <div class = "container mt-2">
        <div class = "row">
           {
           props.workers.map((x) =>
                <div class = "col-4">
                    <div class = "card border w-100 m-2"> 
                        <div class = "card-body">
                            {/* <img src = "https://st3.depositphotos.com/12985790/17645/i/600/depositphotos_176455430-stock-photo-worker.jpg" class = "img-fluid w-50 h-50 float-left mr-3"></img> */}
                            <h2> {x.firstName} {x.user_id}</h2>
                            <Link to = {`/user/${x.user_id}`}>{x.firstName}</Link>
                            {/* <Link to = "/user/:userid">{x.firstName}</Link> */}
                        </div>
                    </div>
                </div> 
            )
           }
        </div>
    </div>
</>;
