import React, { useState, useEffect } from 'react';
import "./profile.css";

export const Profile = props => {

    const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
    const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
    const [userName, setuserName] = useState(localStorage.getItem("userName"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [phone, setPhone] = useState(localStorage.getItem("phone"));
    const [roleID, setUserID] = useState(localStorage.getItem("roleID"));

    return <>
        <div className="constraint mx-auto">
            <figure>
                <img src="default_profile_pic.png" alt="profile_pic" className="img-resize" id="profile_pic"></img>
                <figcaption className="text-center h3">Profile Picture</figcaption>
            </figure>
            <div className="mb-5">
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>First Name </span>
                        <span>Last Name</span>
                    </li>
                    <li className="list-group-item">
                        <span>UserName</span>
                    </li>
                    <li className="list-group-item">
                        <span>Email</span>
                    </li>
                    <li className="list-group-item">
                        <span>Phone</span>
                    </li>
                    <li className="list-group-item">
                        <span>Role</span>
                    </li>
                </ul>
            </div>
            <div className="mt-5 mb-5">
                <div className="card">
                    <div className="card-header bg-card-header">
                        <span className="h1 text-light">Gallery</span>
                    </div>
                    <div className="card-body gallery">
                        <img src="http://placehold.it/150x150" alt="img_1"></img>
                        <img src="http://placehold.it/150x150" alt="img_2"></img>
                        <img src="http://placehold.it/150x150" alt="img_3"></img>
                        <img src="http://placehold.it/150x150" alt="img_4"></img>
                        <img src="http://placehold.it/150x150" alt="img_5"></img>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="card">
                    <div className="card-header bg-card-header">
                        <span className="h1 text-light">Reviews</span>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    </>;
}

