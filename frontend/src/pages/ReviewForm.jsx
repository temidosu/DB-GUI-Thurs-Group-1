import React from "react";
import { Repository } from "../api/repository";
import { Review } from "../models/review";
import { Rating } from "./Rating";

export class ReviewForm extends React.Component {
    repository = new Repository()

    state = {
        userName: "",
        type: -1,
        rating: 0,
        comment: ""
    };

    onButtonClick() {
      // LEFT COMMENTED UNTIL ROUTES CONNECTED 
      //  let newReview = new Review(this.state.userName, this.state.type, this.state.rating, this.state.comment, new Date())
      //  console.log(newReview)
      //  this.props.onReviewAdded(newReview);
      //  this.Repository.addReview(this.props.userId, newReview)
        this.setState({ type: -1})
        this.setState({ userName: "" });
        this.setState({ rating: 0 });
        this.setState({ comment: "" });
    }

    render() {
    return (
      <>
        <form>
          <div class="jumbotron bg-secondary p-2 mt-3 mb-0 mx-5"><h5 class="p-1 m-1 ml-2 text-white">Add Review</h5></div>
          <div class="col pt-2 mx-5">
            <div class="row">
              <div class="col-8">
                <div class="form-group">
                <label htmlFor="yourName">Your Name</label>
                  <input type="email" class="form-control" id="yourName" onChange={(ev) => this.setState({ userName: ev.target.value })}/>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label htmlFor="rating">Rating</label>
                  <select name="rating" id="rating" class="form-control" value={this.state.rating} onChange={(event) => this.setState({ rating: event.target.value })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div class="col d-flex align-items-center">
                <Rating value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })}/>
              </div>
            </div>
            <div class="row">
              <div class="col-11">
                <div class="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea class="form-control" id="comment" rows="3" comment={this.state.comment} onChange={(event) => this.setState({ comment: event.target.value })}></textarea>
                </div>
                <button id="submit" class="btn btn-primary "onClick={() => this.onButtonClick()} type="button">
                Submit
                </button>  
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}