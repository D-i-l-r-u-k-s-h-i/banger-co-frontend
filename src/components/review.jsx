import React from 'react'

function Review(props) {
    console.log(props)
    const { customerUserName, customerReview, timestamp } = props.reviews;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${customerUserName.toLowerCase()}@adorable.io.png`}
        alt={customerUserName}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{timestamp}</small>
        <h6 className="mt-0 mb-1 text-muted">{customerUserName}</h6>
        {customerReview}
      </div>
    </div>
  );
}

export default Review