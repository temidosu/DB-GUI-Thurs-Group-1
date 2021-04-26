import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Homepage } from './pages/Homepage.jsx'
import { Signup } from './pages/signup.jsx'
import { Login } from './pages/login.jsx'
import { Logout } from './pages/logout.jsx'
import { Projects } from './pages/Projects.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.jsx'
import { Profile } from './pages/profile.jsx'
import { MyProjects } from './pages/myProjects.jsx'
import { Workers } from './pages/workers.jsx'
import { Contractors } from './pages/contractors.jsx'
import { Navbar } from './navbar/Navbar.jsx'
import { OthersProfile } from './pages/othersProfile.jsx'

// React functional component
function App () {
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [number, setNumber] = useState("")
  const [values, setValues] = useState([])

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = ''
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = false;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : 'localhost'

  // handle input field state change
  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const fetchBase = () => {
    axios.get(`http://${url}:8000/`).then((res)=>{
      alert(res.data);
    })
  }

  // fetches vals of db via GET request
  const fetchVals = () => {
    axios.get(`http://${url}:8000/values`).then(
      res => {
        const values = res.data.data;
        console.log(values);
        setValues(values)
    }).catch(err => {
      console.log(err)
    });
  }

  // handle input form submission to backend via POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    let prod = number * number;
    axios.post(`http://${url}:8000/multplynumber`, {product: prod}).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
    setNumber("");
  }

  // handle intialization and setup of database table, can reinitialize to wipe db
  const reset = () => {
    axios.post(`http://${url}:8000/reset`).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
  }

  // tell app to fetch values from db on first load (if initialized)
  useEffect(() => {
    fetchVals();
  }, [])

  return (
    <Router>
        <Navbar /> 
        <Switch>
           {/* <Route path = "user/:userid" render = {(props) => < OthersProfile {...props}/> } /> */}
           <Route path = "/user/:userid" component = { OthersProfile }/>
           <Route path = "/home" component = { Dashboard } /> 
           <Route path = "/contractors" component = { Contractors } />  
           <Route path = "/workers" component = {Workers} /> 
           <Route path = "/my projects" component = {MyProjects} /> 
           <Route path = "/profile" component = { Profile} />
           <Route path = "/dashboard" component = {Dashboard}/>
           <Route path = "/login" component = {Login}/>
           <Route path = "/logout" component = {Logout}/>
           <Route path = "/logout" component = {Homepage}/>
           <Route path = "/projects" component = {Projects}/>
           <Route path = "/signup" component = {Signup}/>
           <Route path = "/" component = {Homepage}/>
        </Switch>
    </Router> 
  );
}

export default App;