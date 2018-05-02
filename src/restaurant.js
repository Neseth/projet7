import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
    render() {
        //const test = this.props.restaurant.ratings.map((stars, comment) => {
        //    return <div><p>{this.props.restaurant.ratings.stars}</p><p>{this.props.restaurant.ratings.comment}</p></div>
        //}

        // )
        // const rating = this.props.restaurant.ratings.map((rating => {
        //     return rating
        //  }))
        const ratings = this.props.restaurant.ratings.map((rating, index) => {
            return <div key={index}>{rating.stars}{rating.comment}</div>
        })
        return (
            <div className="restaurant">
                {this.props.restaurant.restaurantName}
                {ratings}
            </div>
        );
    }
}

export default Restaurant;