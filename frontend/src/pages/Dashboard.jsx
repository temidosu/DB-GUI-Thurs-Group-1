import React from 'react';
import "./dashboard.css";
import { Navbar } from "../navbar/Navbar.jsx"
import { Search } from "./search"


export const Dashboard = props => <>
    <>
        <Navbar />
        <br></br> 
        <br></br> 
        <div container class = "text-center">
            <h2> Welcome, {props.user.firstName} {props.user.lastName}</h2>
            <Search /> 
        </div>
    </>; 
</>; 