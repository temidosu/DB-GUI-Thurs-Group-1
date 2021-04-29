import React from 'react'; 
import axios from 'axios';
import { Repository } from '../api/repository';
import {Link, Redirect} from 'react-router-dom';
import { Review } from '../models/review'; 
import { ReviewForm } from './ReviewForm'; 
import { ReviewList } from './ReviewList'; 
import { ProjectRequestButton } from '../buttons/projectRequestButton'; 
import { HireButton } from '../buttons/hireButton'; 
import { Rating } from './Rating'; 

export class OthersProfile extends React.Component {

    repo = new Repository(); 

    state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "", 
      userName: "",  
      zipCode: "",
      reviews:[], 
      rating: ""
    }

    componentDidMount () {
      if(this.props.match.params.userid)
      {
          this.repo.getUserInfo(this.props.match.params.userid).then(
          data => {
              console.log(data); 
              this.setState( {firstName: data[0].firstName, lastName: data[0].lastName, email: data[0].userEmail,
              phone: data[0].phoneNumber, role: data[0].role_id, userName: data[0].userName, zipCode: data[0].zipCode})
              if(this.state.role == 2)
              {
                  this.getReviews(this.props.match.params.userid);
                  this.getRating(this.props.match.params.userid);
              }
            }
          );
          localStorage.setItem("contractorID", this.props.match.params.userid); 
      }
    }

    getRating(id)
    {
        this.repo.workerRating(id).then(data=> 
        {
            this.setState({rating: data[0].rating})
        })
    }

    getRole(role) {
        if(role == 1)
        {
            return "Client"
        }
        if(role == 2)
        {
            return "Worker"
        }
        if(role == 3)
        {
            return "Company"
        }
    }

    addReview(review)
    {
        var reviews = this.state.reviews; 
        reviews.push(review);
        this.setState({reviews}); 
    }

    //reviewerID, reviewerFirstName, reviewerLastName, reviewedID, rating, comment, date, projectID

    // this.reviewerID = reviewerID;
    // this.reviewerFirstName = reviewerFirstName;
    // this.reviewerLastName = reviewerLastName; 
    // this.reviewedID = reviewedID; 
    // this.reviewedFirstName = reviewedFirstName;
    // this.reviewedLastName = reviewedLastName; 
    // this.rating = rating;
    // this.comment = comment;
    // this.date = date;
    // this.projectID = projectID; 


    getReviews(id) {
        this.repo.getReviewsByReviewed(id).then(
            data => ( 
                console.log("data", data), 
                data.map(x => {
                    this.addReview (new Review(x.ReviewerID, x.firstName, x.lastName, x.ReviewedID, this.state.firstName, this.state.lastName, x.ReviewScore, x.ReviewText, x.Timestamp, x.ID)); 
                })
        )
        )
    }

    addNewReview(newReview) {
        this.setState((prevState) => {
          prevState.reviews.push(newReview);
          return prevState;
        });
    }

    displayPhone() {
        var phoneNum = "("; 
        phoneNum += this.state.phone.toString().substring(0,3); 
        phoneNum += ")"; 
        phoneNum += this.state.phone.toString().substring(3,6); 
        phoneNum += "-"; 
        phoneNum += this.state.phone.toString().substring(6,this.state.phone.length); 
        return phoneNum; 
    }

    render() 
    {
        if(localStorage.getItem("roleID") === null)
        {
            return <Redirect to = "/"> </Redirect>
        }
        if(this.state.role == "")
        {
            return <>
            {/* <div class = "container text-center">
                <div class = "card border-0">
                    <div class = "card-body">
                        <img src = "https://staysafe.org/wp-content/uploads/2017/12/Safety-Hazards-Signs-for-Seniors-1.jpg" class = "img-fluid h-30 w-30"/> 
                        <h1 class = "display-5">User not found.</h1>
                    </div> 
                </div>
            </div> */}
            </>;
        }
        if(this.state.role == 1)
        {
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>{this.getRole(this.state.role)}</h4>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <h2> {this.state.firstName} {this.state.lastName} </h2>
                        <p> Email: {this.state.email} Phone: {this.displayPhone()} </p> 
                    </div>
                </div> 
            </div> 
        )
        }
        if(this.state.role == 2)
        {
            if(localStorage.getItem("roleID") != 2)
            {
                return (
                    // <h2> {this.state.firstName} </h2>
                    <div class = "container"> 
                        <br></br>
                        <br></br>
                        <div class = "card mt-5"> 
                            <div class="card-header">
                                <h4 class = "float-left mr-3">{this.getRole(this.state.role)}</h4> 
                                <Rating rating = {this.state.rating}/>
                            </div>
                            <div class = "card-body"> 
                                <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                                <h1> {this.state.userName} </h1>
                                <h2> {this.state.firstName} {this.state.lastName} </h2>
                                <p> Email: {this.state.email} Phone: {this.displayPhone()} </p> 
                                <HireButton/> 
                            </div>

                        </div> 
                        <div class = "card mt-5"> 
                            <div class="card-header">
                                <h4>Reviews</h4>
                            </div>
                            <ReviewList reviews = {this.state.reviews}/>
                            <ReviewForm reviewedID = {this.props.match.params.userid} reviewedFirstName = {this.state.firstName} reviewedLastName = {this.state.lastName} onReviewAdded={(newReview) => this.addNewReview(newReview)}/>
                        </div> 
                        {/* <div class = "card mt-5"> 
                            <div class="card-header">
                                <h4>Work Experience</h4>
                            </div>
                        </div>  */}
                    </div> 
                )
            }
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4 class = "float-left mr-3">{this.getRole(this.state.role)}</h4> 
                        <Rating rating = {this.state.rating}/>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <h2> {this.state.firstName} {this.state.lastName} </h2>
                        <p> Email: {this.state.email} Phone: {this.displayPhone()} </p> 
                    </div>
                </div> 
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>Reviews</h4>
                    </div>
                    <ReviewList reviews = {this.state.reviews}/>
                    <ReviewForm reviewedID = {this.props.match.params.userid} reviewedFirstName = {this.state.firstName} reviewedLastName = {this.state.lastName} onReviewAdded={(newReview) => this.addNewReview(newReview)}/>
                </div> 
                {/* <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>Work Experience</h4>
                    </div>
                </div>  */}
            </div> 
        )
        }
        if(this.state.role == 3)
        {
            if(localStorage.getItem("roleID") == 1)
            {
                return (
                    // <h2> {this.state.firstName} </h2>
                    <div class = "container"> 
                        <br></br>
                        <br></br>
                        <div class = "card mt-5"> 
                            <div class="card-header">
                                <h4>{this.getRole(this.state.role)}</h4>
                            </div>
                            <div class = "card-body"> 
                                <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                                <h1> {this.state.userName} </h1>
                                <h2> {this.state.firstName} {this.state.lastName} </h2>
                                <p> Email: {this.state.email} Phone: {this.displayPhone()} </p>  
                                <ProjectRequestButton />  
                            </div>
                        </div>
                        <div class = "card mt-5"> 
                            <div class="card-header">
                                <h4>Reviews</h4>
                            </div>
                            <ReviewList reviews = {this.state.reviews}/>
                            <ReviewForm reviewedID = {this.props.match.params.userid} reviewedFirstName = {this.state.firstName} reviewedLastName = {this.state.lastName} onReviewAdded={(newReview) => this.addNewReview(newReview)}/>
                        </div>
                    </div> 
                )
            }
            return (
            // <h2> {this.state.firstName} </h2>
            <div class = "container"> 
                <br></br>
                <br></br>
                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>{this.getRole(this.state.role)}</h4>
                    </div>
                    <div class = "card-body"> 
                        <img src = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" class = "w-10 h-10 float-left mr-3"></img>
                        <h1> {this.state.userName} </h1>
                        <h2> {this.state.firstName} {this.state.lastName} </h2>
                        <p> Email: {this.state.email} Phone: {this.displayPhone()} </p> 
                    </div>
                </div> 

                <div class = "card mt-5"> 
                    <div class="card-header">
                        <h4>Reviews</h4>
                    </div>
                    <ReviewList reviews = {this.state.reviews}/>
                    <ReviewForm reviewedID = {this.props.match.params.userid} reviewedFirstName = {this.state.firstName} reviewedLastName = {this.state.lastName} onReviewAdded={(newReview) => this.addNewReview(newReview)}/>
                </div>
            </div> 
        )
        }
    }
}