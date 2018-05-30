import React, { Component } from 'react';
import Map from './map';
import Restaurant from './restaurant';
import SliderNote from './slider';

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
    },
    value: 0,
    clicked: null,
    addRestaurant: false,
    newRestaurant: []
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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.bounds !== nextState.bounds) {
      return true;
    }
    if (this.state.selected !== nextState.selected) {
      return true;
    }
    if (this.state.mouseEnter !== nextState.mouseEnter) {
      return true;
    }
    if (this.state.value !== nextState.value) {
      return true;
    }
    if (this.state.clicked !== nextState.clicked) {
      return true
    }
    if (this.state.addRestaurant !== nextState.addRestaurant) {
      return true
    }
    if (this.state.restaurants !== nextState.restaurants) {
      return true
    }
    return false;
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

  handleValue = (value) => {
    this.setState({
      value: value
    })
  }

  newMarkeur = (lat, lng) => {
    this.setState({
      clicked: {
        lat: lat,
        lng: lng
      }
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const test = this.state.restaurants.slice();
    test.push({
      restaurantName: this.refs.newRestaurantName.value,
      address: this.refs.newRestaurantAdress.value,
      lat: this.state.clicked.lat,
      long: this.state.clicked.lng,
    })
    this.setState({
      restaurants: test,
      addRestaurant: false,
      clicked: null
    })
  }

  render() {
    let addRestaurant = this.state.addRestaurant
    console.log(this.state.restaurants)
    return (
      <div className="app">
        <div className="restaurants">
          <SliderNote handleValue={this.handleValue} />
          {this.state.clicked &&
            <button onClick={() => this.setState({ addRestaurant: !addRestaurant })}>Ajoutez un restaurant à l'emplacement du marqueur</button>}
          {addRestaurant &&
            <form onSubmit={this.handleSubmit}>
              <label>Nom du Restaurant</label>
              <input type="text" ref="newRestaurantName" />

              <label>Adresse du restaurant</label>
              <input type="text" ref="newRestaurantAdress" />

              <button type="submit" >Valider</button>
            </form>}

          {this.state.restaurants.map((restaurant, index) => {
            if ((this.state.bounds.ne.lat > restaurant.lat) && (restaurant.lat > this.state.bounds.sw.lat)
              && (this.state.bounds.ne.lng > restaurant.long) && (restaurant.long > this.state.bounds.sw.lng)) {
              return <Restaurant restaurant={restaurant} handleClick={this.selectedRestaurant} handleOnMouseEnter={this.handleOnMouseEnter}
                handleOnMouseLeave={this.handleOnMouseLeave} value={this.state.value} rating={restaurant.ratings} key={index} />
            } else { return null }
          })}
          
        </div>
        <div className="map">
          <Map restaurant={this.state.restaurants} selected={this.state.selected} mouseEnter={this.state.mouseEnter} handleShown={this.handleShown} value={this.state.value}
            newMarkeur={this.newMarkeur} />
        </div>
      </div>
    );
  }
}

export default App;

/*
{this.state.newRestaurant.map((restaurant, index) => {
            if ((this.state.bounds.ne.lat > restaurant.lat) && (restaurant.lat > this.state.bounds.sw.lat)
              && (this.state.bounds.ne.lng > restaurant.long) && (restaurant.long > this.state.bounds.sw.lng)) {
              return <Restaurant newRestaurant={restaurant} handleClick={this.selectedRestaurant} handleOnMouseEnter={this.handleOnMouseEnter}
                handleOnMouseLeave={this.handleOnMouseLeave} value={this.state.value} key={index} />
            } else { return null }
          })}
          */