import React, { Component } from 'react';
import './restaurant.css';

class Restaurant extends Component {
    state = {
        coms: false,
        addcom: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.coms !== nextState.coms) {
            return true;
        }
        if (this.props.value !== nextProps.value) {
            return true;
        }
        if (this.state.addcom !== nextState.addcom) {
            return true
        }
        if (this.props.clicked !== nextProps.clicked) {
            return true
        }
        return false;
    }

    handleClick = (event) => {
        this.props.handleClick(this.props.restaurant)
    }
    handleOnMouseEnter = (event) => {
        this.props.handleOnMouseEnter(this.props.restaurant)
    }
    handleOnMouseLeave = (event) => {
        this.props.handleOnMouseLeave(this.props.restaurant)
    }

    render() {
        const coms = this.state.coms;
        const addcom = this.state.addcom;
        const streetView = "https://maps.googleapis.com/maps/api/streetview?size=400x400&fov=90&heading=235&pitch=10"
        const key = "AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw"
        const ratings = this.props.restaurant.ratings ? this.props.restaurant.ratings.map((rating, index) => {
            return <div key={index}>{rating.stars}{rating.comment}</div> 
        }) : null

        const star = this.props.restaurant.ratings ? this.props.restaurant.ratings.map((rating, index) => {
            return rating.stars
        }) : null

        const starValue = star ? star.reduce((previous, current) => current + previous) : null
        const average = starValue ? starValue / star.length : "Pas encore de notes !"

        return (
            <div>
                {average === "Pas encore de notes !" || average > this.props.value ?
                    <div className="restaurant" onClick={this.handleClick} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} >
                        {this.props.restaurant.restaurantName}
                        <div>{"Note moyenne : " + average}</div>
                        <div>
                            <button onClick={() => this.setState({ coms: !coms })}>Afficher les commentaires</button>
                            {coms &&
                                <div>
                                    <div>
                                        <img src={streetView + "&key=" + key + "&location=" + this.props.restaurant.lat + "," + this.props.restaurant.long} alt="lol" />
                                        {ratings}
                                    </div>
                                    <button onClick={() => this.setState({ addcom: !addcom })}>Ajouter un commentaire</button>
                                    {addcom &&
                                        <div className="backStyle">
                                            <div className="modalStyle">
                                                <label>Choisissez la note : </label>
                                                <select name="Note">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <br /> <br/>
                                                <label>Ajoutez un commentaire : </label>
                                                <br />
                                                <textarea placeholder="Votre commentaire" maxLength="200" />
                                                <br/> <br/>
                                                <button>Envoyer</button>
                                            </div>
                                        </div>}
                                </div>}
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

export default Restaurant;
/*
code street view : AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw
 test street view : https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyBdScQJYPezngPd3NYEZk3Kb_OGHKlVcnw

const backdropStyle = {
    position: 'fixed',
    
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
};

// The modal "window"
const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
};
<button onClick={() => this.setState({ addcom: !addcom })}>Ajouter un commentaire</button>
                            {addcom &&
                                <div style={backdropStyle}>
                                    <div style={modalStyle}>
                                        <label>Choisissez la note :
                                            <select name="Note">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </label>
                                        <label>Ajoutez un commentaire :
                                            <textarea placeholder="Votre commentaire" maxLength="200" />
                                        </label>
                                        <button>Envoyer</button>
                                    </div>
                                </div>}
*/