import React from "react";
import './Rating.css';

export const Rating = (props) => (
    <>
        {props.rating < 0 && <p class = "text-muted"> No rating yet </p>}
        {
            props.rating >= 0 &&
            <span className="stars">
            {
            [1,2,3,4,5].map(x => (<i key={x} className={(x > props.rating ? 'empty-star' : 'full-star')}></i>))
            }
            </span>
        }
    </>
  );