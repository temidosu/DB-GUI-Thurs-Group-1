import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Project } from '../models/project'; 
import { ApplyButton } from '../buttons/applyButton'; 


export const Projects = props => <> 
    <div class = "container mt-2">
        <div class = "row">
        {
            props.projects.map((x) =>
                <div class = "col-6">
                <div class = "card border-0 w-100 m-2"> 
                    <div class = "card-body">
                        <h2> {x.ProjectName} </h2> 
                        <h2>  {x.status} </h2> 
                    </div>
                </div>
                </div> 
            )
        }
        </div> 
    </div>
</>;
