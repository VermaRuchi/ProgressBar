import React, { Component } from 'react'
import styled from 'styled-components'
import '../../App.css'
// import PropTypes from 'prop-types'

const Track = styled.div`
    width:30%;
    height:30px;
    background-color:#fff;
    border-radius: 20px;
    box-shadow: inset 0 0 5px #000;
    margin-top:10px;
`;

const Thumb = styled.div`
    width:${props=> props.percentage}%;
    height:100%;
    background-color:#6bccf9;
    border-radius:22px;
    transition: width 0.3s ease-in-out;
`;
export default class ProgressBar3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            percentage: 30
        }
    }

    clamp = (min, value, max) => {
        return Math.min(Math.max(min, value),max);
        /*
        so this is basically a function to clamp the value zero and
        a hundred now if we use this like this 
        */
    }
    render() {
        return (
            <header className="App-header">
                <div>
                        <button  onClick={() => { this.setState(
                            {percentage: this.state.percentage + 10}
                        )}}>Increase</button>
                   
                        <button onClick={() => { this.setState(
                            {percentage: this.state.percentage - 10}
                        )}}>Decrease</button>
                </div>
                <Track>
                    <Thumb percentage={this.clamp(0,this.state.percentage,100)}/>
                </Track>   
            </header>
        )
    }
}
