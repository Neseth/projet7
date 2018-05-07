import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.restaurant);
    }
    render() {
        const ratings = this.props.restaurant.ratings.map((rating, index) => {
            return <div key={index}>{rating.stars}{rating.comment}</div>
        })

        const star = this.props.restaurant.ratings.map((rating, index) => {
            return rating.stars
        })

        const starValue = star.reduce((previous, current) => current + previous);
        const average = starValue / star.length;

        return (
            <div className="restaurant" onClick={this.handleClick}>
                {this.props.restaurant.restaurantName}
                {ratings}
                {average}
            </div>
        );
    }
}

export default Restaurant;