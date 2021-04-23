import React from 'react';
import "./side_menu.css";

export class SideMenu extends React.Component  {



    render() {
        

        return <> 
            <div className="blur position-fixed"></div>
            <div className="position-fixed push-right w-10 z-1">
                <div className="float-right bg-nav vh-80 w-100 text-light">
                    <div className="float-right w-100">
                        <div className="border-top border-bottom border-secondary">
                            <p className="h3 text-right mb-5 mt-3">Profile</p>
                            <p className="h3 text-right mb-3">Dashboard</p>
                        </div>
                        <div className="border-bottom border-secondary">
                            <p className="h3 text-right mb-5 mt-3">Find Workers</p>
                            <p className="h3 text-right mb-5"></p>
                        </div>
                        <div className="border-bottom border-secondary w-100 bottom">
                            <p className="h3 text-right mb-3 mt-3">Logout</p>
                        </div>
                    </div>
                </div>
                <div className="float-none"></div>
            </div>
        </>;
    }
}