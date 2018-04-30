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
    
  // const text = this.props.test.restaurantName

    return (
      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={11}
          >         
    
          <Marker
          lat={48.8737815}
          lng={2.3501649}
          text={"test"}
          />
             
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
