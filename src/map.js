import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import './map.css';

class Map extends Component {
  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }
    
    return (
      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={11} >
          {this.props.restaurant.map((restaurant, index) => {
            return <Marker lat={restaurant.lat} lng={restaurant.long} text={restaurant.restaurantName} />
          })} 
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
