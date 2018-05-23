import React, { Component } from 'react';
import Map from './map';
import Restaurant from './restaurant';

import './App.css';

class App extends Component {
  state = {
    restaurants: [],
    selected: null,
    mouseEnter: null,
    bounds: {
      sw: {
        lat: null,
        lng: null
      },
      ne: {
        lat: null,
        lng: null
      }
    }
  };

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Neseth/projet7/master/src/restaurant.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          restaurants: data
        });
      })
  }

  selectedRestaurant = (restaurant) => {
    this.setState({
      selected: restaurant
    });
    setTimeout(function () {
      this.setState({ selected: null });
    }.bind(this), 500);
  }

  handleOnMouseEnter = (restaurant) => {
    this.setState({
      mouseEnter: restaurant
    })
  }
  handleOnMouseLeave = () => {
    this.setState({
      mouseEnter: false
    })
  }

  handleShown = (bounds) => {
    this.setState({
      bounds: {
        sw: {
          lat: bounds.sw.lat,
          lng: bounds.sw.lng
        },
        ne: {
          lat: bounds.ne.lat,
          lng: bounds.ne.lng
        }
      }
    })
  }

  render() {
    return (
      <div className="app">
        <div className="restaurants">
          {this.state.restaurants.map((restaurant, index) => {
            if ((this.state.bounds.ne.lat > restaurant.lat) && (restaurant.lat > this.state.bounds.sw.lat)
              && (this.state.bounds.ne.lng > restaurant.long) && (restaurant.long > this.state.bounds.sw.lng)) {
              return <Restaurant restaurant={restaurant} handleClick={this.selectedRestaurant} handleOnMouseEnter={this.handleOnMouseEnter} 
                     handleOnMouseLeave={this.handleOnMouseLeave} key={index} />
            } else { return null }
          })}
        </div>
        <div className="map">
          <Map restaurant={this.state.restaurants} selected={this.state.selected} mouseEnter={this.state.mouseEnter} handleShown={this.handleShown} />
        </div>
      </div>
    );
  }
}

export default App;
