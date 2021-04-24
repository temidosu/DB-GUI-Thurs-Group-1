import React from 'react';
import "./side_menu.css";
import { Link } from "react-router-dom"; 
 
export class SideMenu extends React.Component  {

    state = {
        //assign role based on account
        role_id: 1,
        client: ["Profile", "My Projects", "View Workers", "View Contractors", "Logout"],
        worker: ["Profile", "My Projects", "View Projects", "Logout"],
        contractor: ["Profile", "My Projects", "View Workers", "View Projects", "Logout"]
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