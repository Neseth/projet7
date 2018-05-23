import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import './map.css';

class Map extends Component {
  state = {
    myPos: {
      lat: null,
      lng: null
    },
    error: null,
    center: {
      lat: null,
      lng: null
    },
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
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          myPos: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          error: null
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  handleMapChange = ({ bounds }) => {
    this.props.handleShown(bounds)
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
      },
      center: {
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
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth * 40 / 100;

    let center = this.state.center

    if (this.props.selected) {
      center = {
        lat: this.props.selected.lat,
        lng: this.props.selected.long
      }  
      setTimeout(function () {
        this.setState({ center: null });
      }.bind(this), 1000);     
    }

    const marker = this.props.restaurant.map((restaurant, index) => {
      if ((this.state.bounds.ne.lat > restaurant.lat) && (restaurant.lat > this.state.bounds.sw.lat)
        && (this.state.bounds.ne.lng > restaurant.long) && (restaurant.long > this.state.bounds.sw.lng)) {
        return <Marker lat={restaurant.lat} lng={restaurant.long} text={restaurant.restaurantName} selected={restaurant === this.props.selected} 
               mouseEnter={restaurant === this.props.mouseEnter} key={index} />
      } else { return null }
    });

    const myPos = <Marker lat={this.state.myPos.lat} lng={this.state.myPos.lng} text={"Vous êtes ici !"} located={this.state.error === null ? true : false} />;

    return (
      <div className="map">
        {<GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCaA0-daqyri5e5XJr97l5CB1mbw1X8-xE" }}
          center={center}
          zoom={11}
          style={{ height: height, width: width }}
          onChange={this.handleMapChange}
        >
          {marker}
          {myPos}
        </GoogleMapReact>}
      </div>
    );
  }
}

export default Map;

/*
const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth * 40 / 100;

    function MyRect(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;

      this.contains = function (x, y) {
        return this.x <= x && x <= this.x + this.width &&
          this.y <= y && y <= this.y + this.height;
      }
    }
    var r = new MyRect(neLat, swLat, width, height);
    var z = new MyRect(neLng, swLng, width, height);
    
   
    if (r.contains(lat) && (z.contains(lng))) {
      console.log("lol")
    }
    */
