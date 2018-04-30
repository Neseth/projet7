import React, { Component } from 'react';
import Map from './map';
import Restaurant from './restaurant';
import './App.css';

class App extends Component {
  state = {
    restaurants: [
      {
        "restaurantName": "Bronco",
        "address": "39 Rue des Petites Écuries, 75010 Paris",
        "lat": 48.8737815,
        "long": 2.3501649,
        "ratings": [
          {
            "stars": 4,
            "comment": "Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
          },
          {
            "stars": 5,
            "comment": "Tout simplement mon restaurant préféré !"
          }
        ]
      },
      {
        "restaurantName": "Babalou",
        "address": "4 Rue Lamarck, 75018 Paris",
        "lat": 48.8865035,
        "long": 2.3442197,
        "ratings": [
          {
            "stars": 5,
            "comment": "Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
          },
          {
            "stars": 3,
            "comment": "J'ai trouvé ça correct, sans plus"
          }
        ]
      }
    ]
  }

  //const test1 = this.state.restaurants.map((restaurant, ratings) => {
  //   return <span restaurant={restaurant} ratings={ratings}></span>
  // })

  // {this.state.restaurants.map((restaurant, ratings) => {
  //  return <Restaurant restaurant={restaurant} ratings={test}/>
  //})}

  // const test = this.state.restaurants.map((restaurant, index) => {
  //  <h4 key={index}>{restaurant.restaurantName}</h4>
  //  this.state.restaurants.ratings.map((ratings, subindex) => 
  //   <p key={subindex}>{ratings.stars}{ratings.comment}</p>)
  //  })

  render() {
    const test = this.state.restaurants.map((restaurant) => {
      return test
    })

    return (
      <div className="app">
        <div className="restaurants">
          {this.state.restaurants.map((restaurant, index) => { 
              return <Restaurant restaurant={restaurant} rating={key => this.state.restaurants[key].ratings.map((rating) => rating)}  />
          })}     
        </div>
        <div className="map">
          <Map test={test} />
        </div>

      </div>
    );
  }
}

export default App;

//{this.state.restaurants.map((restaurant, index) => {
// return <Restaurant restaurant={restaurant} key={index} />
//})}

//{this.state.restaurants.map((restaurant, index) => {
 // return <p key={index} restaurant={restaurant}></p>
 // restaurant.ratings.map((comment, stars, subindex) => 
 //   <Restaurant key={subindex} comment={comment} stars={stars}></Restaurant>) 
//})}
