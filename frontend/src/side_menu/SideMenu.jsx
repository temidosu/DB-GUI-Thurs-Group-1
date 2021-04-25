import React from 'react';
import "./side_menu.css";
import { Link } from "react-router-dom"; 
 
export class SideMenu extends React.Component  {

    state = {
        role_id: localStorage.getItem("roleID"), 
        client: ["Home", "Profile", "My Projects", "Logout"],
        worker: ["Home", "Profile", "My Projects", "Logout"],
        contractor: ["Home", "Profile", "My Projects", "Logout"]
    }

    render() {
        if(this.state.role_id == 1)
        {
            return <> 
            <div className="blur position-fixed"></div>
            <div className="position-fixed push-right w-10 z-1">
                <div className="float-right bg-nav vh-80 w-100 text-light">
                    <div className="float-right w-100">
                        {
                        this.state.client.map((x) => 
                            <div className="border-top border-bottom border-secondary">
                            <Link to = {x} className="text-decoration-none text-white h3 text-right mb-5 mt-3"> {x} </Link>
                            </div>
                        )
                        }   
                    </div>
                </div>
                <div className="float-none"></div>
            </div>
        </>
        }
        if(this.state.role_id == 2)
        {
            return <> 
            <div className="blur position-fixed"></div>
            <div className="position-fixed push-right w-10 z-1">
                <div className="float-right bg-nav vh-80 w-100 text-light">
                    <div className="float-right w-100">
                        {
                        this.state.worker.map((x) => 
                            <div className="border-top border-bottom border-secondary">
                            <Link to = {x} className="text-decoration-none text-white h3 text-right mb-5 mt-3"> {x} </Link>
                            </div>
                        )
                        }   
                    </div>
                </div>
                <div className="float-none"></div>
            </div>
        </>
        }
        if(this.state.role_id == 3)
        {
            return <> 
            <div className="blur position-fixed"></div>
            <div className="position-fixed push-right w-10 z-1">
                <div className="float-right bg-nav vh-80 w-100 text-light">
                    <div className="float-right w-100">
                        {
                        this.state.contractor.map((x) => 
                            <div className="border-top border-bottom border-secondary">
                            <Link to = {x} className="text-decoration-none text-white h3 text-right mb-5 mt-3"> {x} </Link>
                            </div>
                        )
                        }   
                    </div>
                </div>
                <div className="float-none"></div>
            </div>
        </>
        }
        ;
    }
}