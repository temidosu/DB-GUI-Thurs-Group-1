import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';

export class ViewWorkers extends React.Component {

    state = {
        workers: [1,2,3,4,5,6,7,8,9,10],
        loggedIn: false 
    }



    render() 
    {
        if(!localStorage.getItem("userID") || localStorage.getItem("userID") == "null")
        {
            return <Redirect to = "/login"></Redirect> 
        }
        return <>
            <div class = "container mt-2">
                <br></br>
                <br></br>
                <h1 class = 'display-4  text-center'> Workers </h1>
                <br></br>
                <div class = "row">
                {
                    this.state.workers.map((x) =>
                        <div class = "col-6">
                        <div class = "card border-0 w-100 m-2"> 
                            <div class = "card-body">
                                <img src = "https://st3.depositphotos.com/12985790/17645/i/600/depositphotos_176455430-stock-photo-worker.jpg" class = "img-fluid w-50 h-50 float-left mr-3"></img>
                                <h2 > Worker </h2> 
                            </div>
                        </div>
                        </div> 
                    )
                }
                </div> 
            </div>
        </>
    }
}
