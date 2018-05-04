import React, { Component } from 'react';
import Map from './map';
import Restaurant from './restaurant';

import './App.css';

class App extends Component {
  state = {
    restaurants: [],
    selected: null
  };

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Neseth/projet7/master/src/restaurants.json")
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
    })
  }

  render() {
    return (
      <div className="app">
        <div className="restaurants">
          {this.state.restaurants.map((restaurant, index) => {
            return <Restaurant restaurant={restaurant} handleClick={this.selectedRestaurant} key={index} />
          })}
        </div>
        <div className="map">
          <Map restaurant={this.state.restaurants} selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default App;
