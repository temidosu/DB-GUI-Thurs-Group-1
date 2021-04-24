import React, {useState} from 'react';
import "./dashboard.css";
import { Navbar } from "../navbar/Navbar.jsx"
import { Search } from "./search"
import { Popup } from "../components/popup"


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

    <Popup
        title="titleHere"
        openPopup={openPopup}
        popupIsOpen={true}
    >
        {/*child form goes here*/}
    </Popup>
</>; 