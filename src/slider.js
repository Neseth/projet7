import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class SliderNote extends Component {

    handleValue = (value) => {
        this.props.handleValue(value)
    }

    render() {
        
        const style = { width: 200, margin: 50 };
        const marks = {
            0: <strong>0</strong>,
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: <strong>5</strong>,
        };

        return (
            <div style={style}>
                <p>Moyenne minimale des restaurants à afficher</p>
                <Slider min={0} max={5} marks={marks} step={null} onChange={this.handleValue} defaultValue={0} />
            </div>
        );
    }
}

export default SliderNote
