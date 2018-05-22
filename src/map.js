import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import './map.css';

class Map extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    bounds: null,
    neLat: null,
    swLat: null,
    neLng: null,
    swLng: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  handleChangeMap = ({ bounds }) => {
    let ne = bounds.ne
    let sw = bounds.sw
    let neLat = bounds.ne.lat
    let swLat = bounds.sw.lat
    let neLng = bounds.ne.lng
    let swLng = bounds.sw.lng

    this.setState({
      bounds: { ne, sw },
      neLat: neLat,
      swLat: swLat,
      neLng: neLng,
      swLng: swLng
    })
    console.log(bounds)
    console.log(neLat)
    console.log(swLat)
    console.log(this.state.bounds)
  }

  apiIsLoaded = (map, maps) => {
    if (map) {
      const bounds = map.getBounds();
      // let ne = bounds.getNorthEast().lng();
      console.log(bounds)
    } 
    let marker = new maps.Marker({
      position: {lat: this.props.restaurant.lat, lng: this.props.restaurant.long},
      map,
      title: 'Hello World!'
    });

  };
  

  render() {
    
    const test2 = this.state.bounds
    console.log(test2)

    let test = {
      lat: this.state.latitude,
      lng: this.state.longitude
    }

    if (this.props.selected) {
      test = {
        lat: this.props.selected.lat,
        lng: this.props.selected.long
      }
    }

    
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCaA0-daqyri5e5XJr97l5CB1mbw1X8-xE" }}
          center={test}
          zoom={11}
          onChange={this.handleChangeMap}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
        >

          {this.props.restaurant.map((restaurant, index) => {
            console.log(this.state.neLat)
            console.log(restaurant.lat)
            console.log(this.state.swLat)
            console.log(this.state.neLng)
            console.log(restaurant.long)
            console.log(this.state.swLng)

            if ((this.state.neLat > restaurant.lat) && (restaurant.lat > this.state.swLat) && (this.state.neLng > restaurant.long) && (restaurant.long > this.state.swLng)) {
              return <Marker lat={restaurant.lat} lng={restaurant.long} text={restaurant.restaurantName} selected={restaurant === this.props.selected} key={index} />
            } else {
              return null
            }
          })}

          <Marker lat={this.state.latitude} lng={this.state.longitude} text={"Vous êtes ici !"} located={this.state.error === null ? true : false} />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

// map api key : AIzaSyCaA0-daqyri5e5XJr97l5CB1mbw1X8-xE
/*
if center.fitbounds() ? this props return marker
*/
/*
const apiIsLoaded = (map, maps) => {
      if (map) {
        const bounds = map.getBounds();
       // let ne = bounds.getNorthEast().lng();
        console.log(bounds)
      }
    };

<GoogleMapReact
          center={center}
          zoom={11}
          ref={(ref) => { this.map = ref; }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
        >
const {center, zoom} = fitBounds(bounds, size);
let ne = bounds.getNorthEast().lng();
*/