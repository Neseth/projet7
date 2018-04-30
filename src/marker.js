import React, { Component } from 'react';

class Marker extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default Marker;