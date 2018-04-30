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
    

        const restau = `${this.props.restaurant.restaurantName} ${this.props.restaurant.address} 
        ${this.props.rating.stars} ${this.props.rating.comment}`
        return (
            <div className="restaurant">
                {restau}    
                 {this.props.rating.stars}
            </div>
        );
    }
}

export default Restaurant;