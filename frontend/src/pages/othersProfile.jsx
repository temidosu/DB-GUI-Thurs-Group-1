import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';


export class OthersProfile extends React.Component {

    repo = new Repository(); 

    state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "", 
      userName: "",  
      zipCode: ""
    }

    componentDidMount () {
      this.repo.getUserInfo(this.props.match.params.userid).then(
          data => {
              console.log(data); 
              this.setState( {firstName: data[0].firstName, lastName: data[0].lastName, email: data[0].userEmail,
               phone: data[0].phone, role: data[0].role_id, userName: data[0].userName, zipCode: data[0].zipCode})
          }
      );
    }

    render() 
    {
        return (
            <p> {this.state.firstName} </p>
        )
    }
}