import './navbar.css';
import React from 'react';
import { SideMenu } from '../side_menu/SideMenu';

export class Navbar extends React.Component {

    state = {
        open: false,
        loggedIn: false
    }

    isLoggedIn = () => {
        let loggedIn = localStorage.getItem("userID") && localStorage.getItem("userID") != "null";
        return loggedIn;
    }

    open_close() {
        this.setState({open: !this.state.open});
    }

    componentDidMount()
    {
        if(this.isLoggedIn())
            this.setState({loggedIn: true});
    }
    
    render() {
        if(this.state.loggedIn)
        {
        return <>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><span className="h1">CONSTRUCT WORK</span></a>
                <input type="image" className="float-left w-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" name="side" alt="side" onClick={() => this.open_close()}></input>
            </nav>
            {
                (this.state.open && <SideMenu></SideMenu>)
            }
        </>; 
        }
        else 
        {
        return <>
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><span className="h1">CONSTRUCT WORK</span></a>
        </nav>
        </>;
        }
    }
}