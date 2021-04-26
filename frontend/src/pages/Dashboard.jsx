import React from 'react';
import "./dashboard.css";
import { Search } from "./search"
// import Popup from "../components/popup"
import { Redirect } from "react-router-dom"
import { Workers } from "./workers"


export class Dashboard extends React.Component{

    state = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        userID: localStorage.getItem("userID")
    }
    render()
    {
    if(this.state.userID === null)
    {
        return <Redirect to = "/"></Redirect>
    }
    return <>
        <br></br> 
        <br></br> 
        <div class = "container text-center">
            <h2> Welcome, {this.state.firstName} {this.state.lastName}</h2>
            <Search />
            <br></br>
        </div>
        {/* <Popup
        title="titleHere"
        openPopup={openPopup}
        popupIsOpen={true}
    >
        child form goes here

        </Popup> */}
    </>; 
    }
}