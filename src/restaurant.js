import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
    state = {
        coms: false
    }

    handleClick = () => {
        this.props.handleClick(this.props.restaurant)
    }
    handleOnMouseEnter = () => {
        this.props.handleOnMouseEnter(this.props.restaurant)
    }
    handleOnMouseLeave = () => {
        this.props.handleOnMouseLeave()
    }

    render() {
        const { coms } = this.state;
        const ratings = this.props.restaurant.ratings.map((rating, index) => {
            return <div key={index}>{rating.stars}{rating.comment}</div>
        })

        const star = this.props.restaurant.ratings.map((rating, index) => {
            return rating.stars
        })
        
        const streetView = "https://maps.googleapis.com/maps/api/streetview?size=400x400&fov=90&heading=235&pitch=10"
        const key = "AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw"
        const starValue = star.reduce((previous, current) => current + previous);
        const average = starValue / star.length;

        return (
            <div className="restaurant" onClick={this.handleClick} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                {this.props.restaurant.restaurantName}
                <div>{"Note moyenne : " + average}</div>
                <button onClick={() => this.setState({ coms: !coms })}>Commentaires</button>
                {coms ?
                    <div>
                        {ratings}
                        <img src={streetView + "&key=" + key + "&location=" + this.props.restaurant.lat + "," + this.props.restaurant.long} alt="lol" />
                    </div>
                    : null}
            </div>
        );
    }
}

export default Restaurant;

// code street view : AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw
// test street view : https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw