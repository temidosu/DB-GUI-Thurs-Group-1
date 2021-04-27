import { useState, useEffect } from 'react';
import "./profile.css";

export const Profile = props => {

    const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
    const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [phone, setPhone] = useState(localStorage.getItem("phone"));
    const [zipCode, setZipCode] = useState(localStorage.getItem("zipCode"));
    const [roleID, setRoleID] = useState(localStorage.getItem("roleID"));

    const [fnEditable, setFnEditable] = useState(false);
    const [lnEditable, setLnEditable] = useState(false);
    const [unEditable, setUnEditable] = useState(false);
    const [eEditable, setEEditable] = useState(false);
    const [pEditable, setPEditable] = useState(false);
    const [zcEditable, setZcEditable] = useState(false);
    const [rIDEditable, setRIDEditable] = useState(false);

    const roles = ['','Client', 'Worker', 'Contractor'];

    const updateFn = (firstName) => {

    }
    const updateLn = (firstName) => {

    }
    const updateUn = (firstName) => {

    }
    const updateE = (firstName) => {

    }
    const updateP = (firstName) => {

    }
    const updateRID = (firstName) => {

    }

    return <>
        <div className="constraint mx-auto">
            <div className="mb-5">
                <h1>Profile</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                       { fnEditable && <>
                                <form name="fn_change" className="d-inline-block w-fit">
                                    <input type="text" id="fn_change"
                                        value={firstName}
                                        className="h-input"
                                        onChange={event=>
                                        {setFirstName(event.target.value); localStorage.setItem("firstName", firstName)}}>
                                    </input>
                                </form>
                                <button type="button" 
                                onClick={()=>{updateFn(firstName); console.log(false); setFnEditable(false)}}
                                className="btn small-btn btn-info">Submit</button>
                            </>
                            } 
                            { !fnEditable && <>
                                    <span>{firstName}</span>
                                    <input type="image" src="edit-pencil.png" 
                                    alt="edit-pencil" 
                                    name="edit-pencil"
                                    className="small-img ml-3"
                                    onClick={()=>setFnEditable(true)}></input>
                               </>
                           }
                    </li>
                    <li className="list-group-item">
                        { lnEditable && <>
                                    <form name="ln_change" className="d-inline-block w-fit">
                                        <input type="text" id="ln_change"
                                            value={lastName}
                                            className="h-input"
                                            onChange={event=>
                                            {setFirstName(event.target.value); localStorage.setItem("lastName", lastName)}}>
                                        </input>
                                    </form>
                                    <button type="button" 
                                    onClick={()=>{updateLn(lastName); setLnEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !lnEditable && <>
                                        <span>{lastName}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setLnEditable(true)}></input>
                                </>
                            }
                    </li>
                    <li className="list-group-item">
                        { unEditable && <>
                                    <form name="un_change" className="d-inline-block w-fit">
                                        <input type="text" id="un_change"
                                            value={userName}
                                            className="h-input"
                                            onChange={event=>
                                            {setFirstName(event.target.value); localStorage.setItem("userName", userName)}}>
                                        </input>
                                    </form>
                                    <button type="button" 
                                    onClick={()=>{updateUn(userName); setUnEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !unEditable && <>
                                        <span>{userName}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setUnEditable(true)}></input>
                                </>
                            }
                    </li>
                    <li className="list-group-item">
                        { eEditable && <>
                                    <form name="e_change" className="d-inline-block w-fit">
                                        <input type="text" id="e_change"
                                            value={email}
                                            className="h-input"
                                            onChange={event=>
                                            {setFirstName(event.target.value); localStorage.setItem("email", email)}}>
                                        </input>
                                    </form>
                                    <button type="button" 
                                    onClick={()=>{updateE(email); setEEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !eEditable && <>
                                        <span>{email}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setEEditable(true)}></input>
                                </>
                            }
                    </li>
                    <li className="list-group-item">
                        { pEditable && <>
                                    <form name="p_change" className="d-inline-block w-fit">
                                        <input type="number" id="p_change"
                                            value={phone}
                                            className="h-input"
                                            onChange={event=>
                                            {setFirstName(event.target.value); localStorage.setItem("phone", phone)}}>
                                        </input>
                                    </form>
                                    <button type="button" 
                                    onClick={()=>{updateP(phone); setPEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !pEditable && <>
                                        <span>{phone}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setPEditable(true)}></input>
                                </>
                            }
                    </li>
                    <li className="list-group-item">
                        { zcEditable && <>
                                    <form name="zc_change" className="d-inline-block w-fit">
                                        <input type="number" id="zc_change"
                                            value={zipCode}
                                            className="h-input"
                                            onChange={event=>
                                            {setFirstName(event.target.value); localStorage.setItem("zipCode", zipCode)}}>
                                        </input>
                                    </form>
                                    <button type="button" 
                                    onClick={()=>{updateLn(zipCode); setZcEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !zcEditable && <>
                                        <span>{zipCode}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setZcEditable(true)}></input>
                                </>
                            }
                        </li>
                    <li className="list-group-item">
                        { rIDEditable && <>
                                    <div className="dropdown w-fit d-inline-block">
                                        <button class="btn btn-light dropdown-toggle" type="button" id="roleDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {roles[roleID]}
                                        </button>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button type="button" className="dropdown-item" onClick={()=>{setRoleID(1); localStorage.setItem("roleID", roleID)}}>client</button>
                                            <button type="button" className="dropdown-item" onClick={()=>{setRoleID(2); localStorage.setItem("roleID", roleID)}}>worker</button>
                                            <button type="button" className="dropdown-item" onClick={()=>{setRoleID(3); localStorage.setItem("roleID", roleID)}}>contractor</button>
                                        </div>
                                    </div>
                                    <button type="button" 
                                    onClick={()=>{updateRID(roleID); setRIDEditable(false)}}
                                    className="btn small-btn btn-info">Submit</button>
                                </>
                                } 
                                { !rIDEditable && <>
                                        <span>{roles[roleID]}</span>
                                        <input type="image" src="edit-pencil.png" 
                                        alt="edit-pencil" 
                                        name="edit-pencil"
                                        className="small-img ml-3"
                                        onClick={()=>setRIDEditable(true)}></input>
                                </>
                            }
                    </li>
                </ul>
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

