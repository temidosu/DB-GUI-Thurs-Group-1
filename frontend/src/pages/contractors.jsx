import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Contractor } from '../models/contractor'; 
import { Rating } from './Rating'; 

export const Contractors = props => <> 
    <div class = "container mt-2">
        <div class = "row">
           {
           props.contractors.map((x) =>
                <div class = "col-4">
                    <div class = "card border w-100 m-2"> 
                        <div class = "card-body">
                            <h2> {x.userName} </h2>
                            <p> {x.firstName} {x.lastName} </p>
                            <p> {x.ZipCode} </p>
                            <Link to = {`/user/${x.user_id}`} class = "stretched-link"></Link>
                            <Rating rating = {x.rating}/>
                        </div>
                    </div>
                </div> 
            )
           }
        </div>
    </div>
</>;