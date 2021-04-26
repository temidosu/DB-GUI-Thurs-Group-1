import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Contractor } from '../models/contractor'; 


export const Contractors = props => <> 
    <div class = "container mt-2">
        <div class = "row">
        {
            props.contractors.map((x) =>
                <div class = "col-6">
                <div class = "card border-0 w-100 m-2"> 
                    <div class = "card-body">
                        {/* <img src = "https://st3.depositphotos.com/12985790/17645/i/600/depositphotos_176455430-stock-photo-worker.jpg" class = "img-fluid w-50 h-50 float-left mr-3"></img> */}
                        <h2 > {x.firstName} </h2> 
                    </div>
                </div>
                </div> 
            )
        }
        </div> 
    </div>
</>;
