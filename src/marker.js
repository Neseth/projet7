import React, { Component } from 'react';
import './marker.css';

class Marker extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {    
        if (this.props.mouseEnter !== nextProps.MouseEnter) {
          return true;
        }
        return false;
      }
    
    render() {
        let classes = "marker";
        if (this.props.mouseEnter === true) {
            classes += " selected";
        } if (this.props.located === true) {
            classes += " located";
        }
        return (
            <div className={classes}>
                {this.props.text}
            </div>
        )
    }
}

export default Marker;