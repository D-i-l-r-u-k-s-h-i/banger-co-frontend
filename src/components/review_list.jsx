import React from 'react'
import Review from './review';

function ReviewList(props) {
    return (
        <div >
          <h5 className="text-muted mb-4">
            <span className="badge badge-success">{props.reviews.length}</span>{" "}
            Comment{props.reviews.length > 1 ||props.reviews.length===0 ? "s" : ""}
          </h5>
    
          {props.reviews.length === 0 && !props.loading ? (
            <div className="alert text-center alert-info">
              Be the first to comment
            </div>
          ) : null}
    
          {props.reviews.map((review, index) => (
            <Review key={index} reviews={review} />
          ))}
        </div>
      );
}

export default ReviewList
