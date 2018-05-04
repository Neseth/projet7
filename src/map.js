import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import './map.css';

class Map extends Component {


  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.props.selected) {
      center = {
        lat: this.props.selected.lat,
        lng: this.props.selected.long
      }
    }

    return (

      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={11}
          /*
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}*/ >

          {this.props.restaurant.map((restaurant, index) => {
            return <Marker lat={restaurant.lat} lng={restaurant.long} text={restaurant.restaurantName} selected={restaurant === this.props.selected} key={index} />
          })}
        </GoogleMapReact>


      </div>
    );
  }
}


export default Map;
