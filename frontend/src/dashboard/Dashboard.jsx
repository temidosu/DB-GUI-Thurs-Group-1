import React from 'react';
import "./dashboard.css";

export class Dashboard extends React.Component {



    render() {

        return <>
            <div className="container m-0 mw-100">
                <div className="row">
                    <div className="col mt-5">
                        <div className="card mx-auto w-75 mb-5">
                            <div className="card-header bg-card-header text-center">
                                <span className="h1 text-light">Work Requests (0)</span>
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <div className="card mx-auto w-75 mb-5">
                            <div className="card-header bg-card-header text-center">
                                    <span className="h1 text-light">Job Requests (0)</span>
                            </div>
                            <div className="card-body">
                                    
                            </div>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <div className="card mx-auto w-75">
                            <div className="card-header bg-card-header text-center">
                                    <span className="h1 text-light">Job Postings (0)</span>
                            </div>
                            <div className="card-body">
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>; 
    }
}