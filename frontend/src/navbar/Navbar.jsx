import './navbar.css';
import React from 'react';
import { SideMenu } from '../side_menu/SideMenu';

export class Navbar extends React.Component {

    state = {
        open: false
    }

    open_close() {
        this.setState({open: !this.state.open});
    }
    
    render() {
        return <>
            <nav className="navbar sticky-top navbar-dark bg-nav">
                <a className="navbar-brand" href="/"><span className="h1">CONSTRUCT WORK</span></a>
                <input type="image" className="float-left w-2" src="hamburger_button.png" name="side" alt="side" onClick={() => this.open_close()}></input>
            </nav>
            {
                (this.state.open && <SideMenu></SideMenu>)
            }
        </>; 
    }
}