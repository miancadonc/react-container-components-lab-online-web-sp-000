// Code MovieReviews Here
import React from 'react'

const Review = ({ headline, summary_short}) =>
    <div className={"review"}>
        <h3>{headline}</h3>
        <p>{summary_short}</p>
    </div>

const MovieReviews = ({reviews}) =>
    <div className={"review-list"}>
        {this.props.reviews.map(Review)}
    </div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews