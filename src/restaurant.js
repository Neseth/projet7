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
    console.log(this.props.restaurant)
    const ratings = this.props.restaurant.ratings.map((rating, key) => {
        console.log(rating)
        return <div>{rating.stars}{rating.comment}</div>
    })
        const restau = `${this.props.restaurant.restaurantName}${this.props.restaurant.rating} `
        return (
            <div className="restaurant">
                {restau}   
                {ratings}
                {this.props.restaurant.ratings.stars}
            </div>
        );
    }
}

export default Restaurant;