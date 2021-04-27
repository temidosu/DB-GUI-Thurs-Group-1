import React from "react";
import { Review } from "../models/review"
import { Rating } from "./Rating";

export const ReviewList = props => (
    <>
        {/* <h4 class="mx-5 my-3">User Reviews <span class="text-secondary">({props.reviews.length})</span> </h4>  */}
        <div class="jumbotron bg-light mx-5 my-3 p-1">
            {props.reviews.length == 0 ? <p class="text-secondary m-3">Be the first to add a review!</p> : <></>}
            <ul id="revList" style={{listStyleType : "none" }} >
                {props.reviews.map((review, index) => (
                    <li class="border-bottom "key={index}>
                        <div class="row"><Rating rating={review.rating} /></div>
                        <div class="row">
                            <div class="col-9"><p class="text-secondary"> by {review.reviewerFirstName} {review.reviewerLastName}</p></div>
                            <div class="col"><p class="text-secondary">{new Date(Date.parse(review.date)).toDateString()}</p></div>
                        </div>
                        <div class="row"><p class="col text-dark">{review.comment}</p></div>
                    </li>
                ))}
            </ul>
        </div>
    </>
  );